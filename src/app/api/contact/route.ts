import { NextRequest, NextResponse } from 'next/server';

const OWNER_PHONE = '919380908118'; // Your WhatsApp number (country code + number)
const CALLMEBOT_APIKEY = process.env.CALLMEBOT_APIKEY || '';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, business, phone, email, service, budget, message, location } = body;

    // ── Build WhatsApp notification message ──────────────────────
    const now  = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
    const text = [
      `🚀 *NEW LEAD — oblue*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${name}`,
      `🏢 *Business:* ${business || 'Not provided'}`,
      `📱 *Phone:* ${phone}`,
      `📧 *Email:* ${email || 'Not provided'}`,
      `🛠 *Service:* ${service}`,
      `💰 *Budget:* ${budget || 'Not specified'}`,
      `📍 *Location:* Mysuru, Karnataka`,
      `🕐 *Time:* ${now}`,
      message ? `💬 *Message:* ${message}` : '',
      `━━━━━━━━━━━━━━━━━━━━`,
      `👉 Reply on WhatsApp: https://wa.me/${phone.replace(/[^0-9]/g, '')}`,
    ].filter(Boolean).join('\n');

    // ── Send WhatsApp via CallMeBot ──────────────────────────────
    let whatsappSent = false;
    if (CALLMEBOT_APIKEY) {
      const encoded = encodeURIComponent(text);
      const waUrl   = `https://api.callmebot.com/whatsapp.php?phone=${OWNER_PHONE}&text=${encoded}&apikey=${CALLMEBOT_APIKEY}`;
      const waRes   = await fetch(waUrl, { method: 'GET' });
      whatsappSent  = waRes.ok;
    }

    // ── Always log to console (server-side) ─────────────────────
    console.log('\n📩 NEW FORM SUBMISSION:\n', text, '\n');

    return NextResponse.json({
      success: true,
      whatsappSent,
      message: whatsappSent
        ? 'Form submitted and WhatsApp notification sent!'
        : 'Form submitted successfully. Set CALLMEBOT_APIKEY env var to enable WhatsApp alerts.',
      lead: { name, business, phone, email, service, budget },
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
