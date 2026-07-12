const OWNER_PHONE = '919380908118';
const CALLMEBOT_APIKEY = process.env.CALLMEBOT_APIKEY || '';

export interface LeadData {
  name: string;
  phone: string;
  business?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
  source?: string;
}

export function buildLeadMessage(lead: LeadData): string {
  const now = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return [
    `🚀 *NEW LEAD — oblue*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Name:* ${lead.name}`,
    `🏢 *Business:* ${lead.business || 'Not provided'}`,
    `📱 *Phone:* ${lead.phone}`,
    `📧 *Email:* ${lead.email || 'Not provided'}`,
    `🛠 *Service:* ${lead.service || 'Via Chatbot'}`,
    `💰 *Budget:* ${lead.budget || 'Not specified'}`,
    `📍 *Location:* Mysuru, Karnataka`,
    `🕐 *Time:* ${now}`,
    lead.message ? `💬 *Message:* ${lead.message}` : '',
    `📲 *Source:* ${lead.source || 'Contact Form'}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👉 Reply on WhatsApp: https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`,
  ]
    .filter(Boolean)
    .join('\n');
}

export async function sendWhatsAppNotification(
  lead: LeadData
): Promise<boolean> {
  if (!CALLMEBOT_APIKEY) {
    console.log('\n📩 LEAD (WhatsApp disabled — no API key):\n', buildLeadMessage(lead), '\n');
    return false;
  }

  try {
    const text = buildLeadMessage(lead);
    const encoded = encodeURIComponent(text);
    const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${OWNER_PHONE}&text=${encoded}&apikey=${CALLMEBOT_APIKEY}`;
    const res = await fetch(waUrl, { method: 'GET' });
    return res.ok;
  } catch (err) {
    console.error('WhatsApp notification failed:', err);
    return false;
  }
}
