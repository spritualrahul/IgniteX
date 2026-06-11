import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN || 'ignitex_whatsapp_webhook_2024';

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('Webhook verified successfully!');
    return new NextResponse(challenge, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  console.error('Webhook verification failed. Token mismatch.');
  return new NextResponse('Forbidden', { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received WhatsApp Webhook body:', JSON.stringify(body, null, 2));

    // Acknowledge receipt of the webhook events
    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Error handling WhatsApp webhook post:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
