import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, budget, message, turnstileToken } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify Turnstile
    if (turnstileToken) {
      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      });
      const turnstileData = await turnstileRes.json();
      if (!turnstileData.success) {
        return NextResponse.json({ error: 'Robot verification failed' }, { status: 403 });
      }
    }

    // Send email via Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <contact@milinds.dev>',
        to: 'connect@milinds.dev',
        replyTo: email,
        subject: `New Inquiry: ${inquiryType || 'General'} from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Inquiry Type</td><td style="padding:8px;border:1px solid #ddd;">${inquiryType || 'Not specified'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Budget</td><td style="padding:8px;border:1px solid #ddd;">${budget || 'Not specified'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>
          </table>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend API error:', err);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
