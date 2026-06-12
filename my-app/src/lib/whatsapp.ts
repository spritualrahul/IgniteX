export interface WhatsAppNotificationDetails {
  recipientPhone: string; // The client's phone number
  clientName: string;
  meetingDateTime: string; // formatted date-time string
  meetLink: string;
}

/**
 * Sends a WhatsApp message via Meta WhatsApp Cloud API.
 *
 * TEST MODE (current):
 *   - Meta's test number can ONLY message your verified developer phone number.
 *   - We notify YOU (admin) about the booking using hello_world template.
 *
 * PRODUCTION MODE (after you add a real business number in Step 2 on Meta):
 *   - We can message clients directly using your custom booking_confirmation template.
 *   - Set WHATSAPP_PRODUCTION=true in env to switch to production mode.
 */
export async function sendWhatsAppConfirmation(
  details: WhatsAppNotificationDetails
): Promise<boolean> {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const adminPhone = process.env.WHATSAPP_ADMIN_PHONE || '918935860306'; // your verified dev number
  const isProduction = process.env.WHATSAPP_PRODUCTION === 'true';

  // If credentials are not configured, skip gracefully
  if (!accessToken || !phoneNumberId) {
    console.log('[WhatsApp] Credentials not configured. Skipping WhatsApp notification.');
    return false;
  }

  // Format client phone number
  let clientPhone = details.recipientPhone.replace(/\D/g, '');
  if (clientPhone.length === 10) {
    clientPhone = `91${clientPhone}`;
  }

  try {
    // ── In TEST mode: notify admin about the booking using hello_world template ──
    // The test phone number can ONLY send to your verified developer number.
    const testModeSuccess = await sendMessage(accessToken, phoneNumberId, adminPhone, {
      name: 'hello_world',
      language: { code: 'en_US' },
    });

    console.log(`[WhatsApp] Admin notification sent to ${adminPhone}: ${testModeSuccess}`);

    // ── In PRODUCTION mode: also notify the client with booking details ──
    if (isProduction) {
      const templateName = process.env.WHATSAPP_TEMPLATE_NAME || 'booking_confirmation';

      const clientSuccess = await sendMessage(accessToken, phoneNumberId, clientPhone, {
        name: templateName,
        language: { code: 'en_US' },
        components: [
          {
            type: 'body',
            parameters: [
              { type: 'text', text: details.clientName },
              { type: 'text', text: details.meetingDateTime },
              { type: 'text', text: details.meetLink },
            ],
          },
        ],
      });

      console.log(`[WhatsApp] Client notification sent to ${clientPhone}: ${clientSuccess}`);
    }

    return testModeSuccess;
  } catch (error) {
    console.error('[WhatsApp] Failed to send notification:', error);
    return false;
  }
}

async function sendMessage(
  accessToken: string,
  phoneNumberId: string,
  to: string,
  template: object
): Promise<boolean> {
  const url = `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'template',
      template,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('[WhatsApp] API Error:', JSON.stringify(data, null, 2));
    return false;
  }

  return true;
}
