import { NextRequest } from 'next/server';
import Groq from 'groq-sdk';
import { SYSTEM_PROMPT } from '@/lib/prompts';
import { sendWhatsAppNotification } from '@/lib/notify';

// ─── Lead Detection ─────────────────────────────────────────────

const LEAD_TAG_REGEX = /\[LEAD:name=([^:]+):phone=([^\]]+)\]/;

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('91') && digits.length === 12) return digits;
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

// ─── POST Handler ───────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as {
      messages: { role: 'user' | 'assistant'; content: string }[];
    };

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Messages array required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    // ── Streaming response via SSE ──
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const send = (data: Record<string, unknown>) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
        };

        try {
          const completion = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
            temperature: 0.7,
            max_tokens: 500,
            stream: true,
          });

          let fullContent = '';

          for await (const chunk of completion) {
            const token = chunk.choices[0]?.delta?.content || '';
            if (token) {
              fullContent += token;
              send({ type: 'token', content: token });
            }
          }

          // ── Check for lead tag in final response ──
          const leadMatch = fullContent.match(LEAD_TAG_REGEX);

          if (leadMatch) {
            const name = leadMatch[1];
            const phone = normalizePhone(leadMatch[2]);

            const whatsappSent = await sendWhatsAppNotification({
              name,
              phone,
              service: 'Via Chatbot',
              source: 'AI Chatbot',
              message: `Captured from chatbot. User said: "${messages.slice(-2).map((m) => m.content).join(' | ').slice(0, 200)}"`,
            });

            console.log(
              `\n🤖 CHATBOT LEAD: ${name} (${phone}) — WhatsApp: ${whatsappSent}`
            );

            send({ type: 'lead', leadCaptured: true });
          }

          send({ type: 'done' });
        } catch (err) {
          console.error('Streaming error:', err);
          send({
            type: 'error',
            error: 'Technical issue. Please WhatsApp us at +91 93809 08118.',
          });
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    console.error('Chat API error:', err);
    return new Response(
      JSON.stringify({
        reply: "Sorry, I'm experiencing a technical issue. Please WhatsApp us at +91 93809 08118! 🙏",
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
