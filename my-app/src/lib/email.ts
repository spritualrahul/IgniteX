import nodemailer from 'nodemailer';

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

interface EmailMeetingDetails {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  service: string;
  message: string;
  meetLink: string;
  date: string; // formatted date string
  time: string; // formatted time string
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00+05:30');
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kolkata',
  });
}

function formatTime(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${ampm} IST`;
}

function buildClientEmailHtml(details: EmailMeetingDetails): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 32px 24px; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
        IgniteX Solutions
      </h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
        Your consultation has been confirmed ✓
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 32px 24px;">
      <h2 style="margin: 0 0 8px; color: #18181b; font-size: 20px;">
        Hi ${details.clientName}! 👋
      </h2>
      <p style="margin: 0 0 24px; color: #52525b; font-size: 15px; line-height: 1.6;">
        Thank you for scheduling a consultation with us. We're excited to discuss how we can help your business grow.
      </p>

      <!-- Meeting Card -->
      <div style="background: #fafafa; border: 1px solid #e4e4e7; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 16px; color: #18181b; font-size: 16px; font-weight: 600;">
          📅 Meeting Details
        </h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: #71717a; font-size: 14px; width: 100px;">Date</td>
            <td style="padding: 6px 0; color: #18181b; font-size: 14px; font-weight: 500;">${details.date}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #71717a; font-size: 14px;">Time</td>
            <td style="padding: 6px 0; color: #18181b; font-size: 14px; font-weight: 500;">${details.time}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #71717a; font-size: 14px;">Duration</td>
            <td style="padding: 6px 0; color: #18181b; font-size: 14px; font-weight: 500;">30 minutes</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #71717a; font-size: 14px;">Topic</td>
            <td style="padding: 6px 0; color: #18181b; font-size: 14px; font-weight: 500;">${details.service}</td>
          </tr>
        </table>
      </div>

      <!-- Meet Link Button -->
      <div style="text-align: center; margin-bottom: 24px;">
        <a href="${details.meetLink}" 
           style="display: inline-block; background: #dc2626; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; letter-spacing: 0.3px;">
          🎥 Join Google Meet
        </a>
        <p style="margin: 10px 0 0; color: #a1a1aa; font-size: 12px;">
          Or copy this link: <a href="${details.meetLink}" style="color: #dc2626;">${details.meetLink}</a>
        </p>
      </div>

      <!-- Tips -->
      <div style="background: #fef9f0; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0; color: #92400e; font-size: 13px; line-height: 1.6;">
          <strong>💡 Quick tips for the meeting:</strong><br>
          • Test your camera and microphone beforehand<br>
          • Have your website URL or business details handy<br>
          • Prepare any specific questions you'd like to discuss
        </p>
      </div>

      <p style="margin: 0; color: #52525b; font-size: 14px; line-height: 1.6;">
        Need to reschedule? Just reply to this email and we'll sort it out.
      </p>
    </div>

    <!-- Footer -->
    <div style="background: #fafafa; border-top: 1px solid #e4e4e7; padding: 20px 24px; text-align: center;">
      <p style="margin: 0 0 4px; color: #71717a; font-size: 13px;">
        IgniteX Solutions • Bistupur, Jamshedpur
      </p>
      <p style="margin: 0; color: #a1a1aa; font-size: 12px;">
        <a href="https://www.ignitexsolution.com" style="color: #dc2626; text-decoration: none;">ignitexsolution.com</a>
        &nbsp;•&nbsp; +91 8935860306
      </p>
    </div>
  </div>
</body>
</html>`;
}

function buildAdminEmailHtml(details: EmailMeetingDetails): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1e40af, #1d4ed8); padding: 32px 24px; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
        🔔 New Meeting Booked
      </h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
        A client has scheduled a consultation
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 32px 24px;">
      
      <!-- Client Info -->
      <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
        <h3 style="margin: 0 0 12px; color: #0c4a6e; font-size: 16px; font-weight: 600;">
          👤 Client Information
        </h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 5px 0; color: #64748b; font-size: 14px; width: 80px;">Name</td>
            <td style="padding: 5px 0; color: #0f172a; font-size: 14px; font-weight: 500;">${details.clientName}</td>
          </tr>
          <tr>
            <td style="padding: 5px 0; color: #64748b; font-size: 14px;">Email</td>
            <td style="padding: 5px 0; color: #0f172a; font-size: 14px;">
              <a href="mailto:${details.clientEmail}" style="color: #2563eb;">${details.clientEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 5px 0; color: #64748b; font-size: 14px;">Phone</td>
            <td style="padding: 5px 0; color: #0f172a; font-size: 14px;">
              <a href="tel:${details.clientPhone}" style="color: #2563eb;">${details.clientPhone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 5px 0; color: #64748b; font-size: 14px;">Service</td>
            <td style="padding: 5px 0; color: #0f172a; font-size: 14px; font-weight: 500;">${details.service}</td>
          </tr>
        </table>
      </div>

      <!-- Meeting Info -->
      <div style="background: #fafafa; border: 1px solid #e4e4e7; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
        <h3 style="margin: 0 0 12px; color: #18181b; font-size: 16px; font-weight: 600;">
          📅 Meeting Details
        </h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 5px 0; color: #71717a; font-size: 14px; width: 80px;">Date</td>
            <td style="padding: 5px 0; color: #18181b; font-size: 14px; font-weight: 500;">${details.date}</td>
          </tr>
          <tr>
            <td style="padding: 5px 0; color: #71717a; font-size: 14px;">Time</td>
            <td style="padding: 5px 0; color: #18181b; font-size: 14px; font-weight: 500;">${details.time}</td>
          </tr>
        </table>
      </div>

      <!-- Message -->
      ${details.message ? `
      <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
        <h3 style="margin: 0 0 8px; color: #92400e; font-size: 14px; font-weight: 600;">💬 Client's Message</h3>
        <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6;">${details.message}</p>
      </div>
      ` : ''}

      <!-- Meet Link -->
      <div style="text-align: center;">
        <a href="${details.meetLink}"
           style="display: inline-block; background: #1d4ed8; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600;">
          🎥 Join Google Meet
        </a>
        <p style="margin: 10px 0 0; color: #a1a1aa; font-size: 12px;">
          ${details.meetLink}
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: #fafafa; border-top: 1px solid #e4e4e7; padding: 16px 24px; text-align: center;">
      <p style="margin: 0; color: #a1a1aa; font-size: 12px;">
        This is an automated notification from ignitexsolution.com
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function sendClientConfirmation(details: EmailMeetingDetails) {
  const transporter = getTransporter();
  const fromName = process.env.SMTP_FROM_NAME || 'IgniteX Solutions';
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: details.clientEmail,
    subject: `✅ Meeting Confirmed — ${details.date} at ${details.time}`,
    html: buildClientEmailHtml(details),
  });
}

export async function sendAdminNotification(details: EmailMeetingDetails) {
  const transporter = getTransporter();
  const fromName = process.env.SMTP_FROM_NAME || 'IgniteX Solutions';
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn('ADMIN_EMAIL not configured — skipping admin notification');
    return;
  }

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: adminEmail,
    subject: `🔔 New Meeting: ${details.clientName} — ${details.date} at ${details.time}`,
    html: buildAdminEmailHtml(details),
  });
}

export { formatDate, formatTime };
