import { NextRequest, NextResponse } from 'next/server';
import { sendWhatsAppNotification } from '@/lib/notify';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, business, phone, email, service, budget, message } = body;

    const whatsappSent = await sendWhatsAppNotification({
      name,
      phone,
      business,
      email,
      service,
      budget,
      message,
      source: 'Contact Form',
    });

    console.log('\n📩 NEW FORM SUBMISSION:', { name, phone, service });

    return NextResponse.json({
      success: true,
      whatsappSent,
      message: whatsappSent
        ? 'Form submitted and WhatsApp notification sent!'
        : 'Form submitted successfully.',
      lead: { name, business, phone, email, service, budget },
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
