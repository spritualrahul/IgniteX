export interface WhatsAppNotificationDetails {
  recipientPhone: string; // The client's phone number
  clientName: string;
  meetingDateTime: string; // formatted date-time string
  meetLink: string;
}

/**
 * Sends a booking confirmation WhatsApp message using Meta's WhatsApp Cloud API.
 * Uses a pre-approved template named "booking_confirmation" (or similar).
 * 
 * If credentials are not set in environment variables, it skips sending gracefully.
 */
export async function sendWhatsAppConfirmation(
  details: WhatsAppNotificationDetails
): Promise<boolean> {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME || 'booking_confirmation';

  // If credentials are not configured, skip sending gracefully
  if (!accessToken || !phoneNumberId) {
    console.log('WhatsApp credentials not configured. Skipping WhatsApp confirmation message.');
    return false;
  }

  // Format recipient phone number: ensure it starts with country code and has no spaces/special characters
  // e.g. +91 89358 60306 -> 918935860306
  let formattedPhone = details.recipientPhone.replace(/\D/g, '');
  
  // If number doesn't start with country code (e.g. 10 digits for India), prepend 91 (India default)
  if (formattedPhone.length === 10) {
    formattedPhone = `91${formattedPhone}`;
  }

  try {
    const url = `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: formattedPhone,
        type: 'template',
        template: {
          name: templateName,
          language: {
            code: 'en_US',
          },
          components: [
            {
              type: 'body',
              parameters: [
                {
                  type: 'text',
                  text: details.clientName, // {{1}} - Client Name
                },
                {
                  type: 'text',
                  text: details.meetingDateTime, // {{2}} - Date & Time (e.g. "Sunday, June 14 at 11:00 AM IST")
                },
                {
                  type: 'text',
                  text: details.meetLink, // {{3}} - Google Meet Link
                },
              ],
            },
          ],
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Meta WhatsApp API Error response:', data);
      return false;
    }

    console.log('WhatsApp confirmation sent successfully to:', formattedPhone, data);
    return true;
  } catch (error) {
    console.error('Failed to send WhatsApp notification:', error);
    return false;
  }
}
