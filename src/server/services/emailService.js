import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const client = new SESv2Client({ region: 'us-east-1' });

const FROM_EMAIL = 'hello@cyventrasoft.com';
const TO_EMAIL = 'contact@cyventrasoft.com';

export async function sendContactNotification({ name, email, phone, message, intent }) {
    const lines = [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        intent ? `Intent: ${intent}` : null,
        '',
        'Message:',
        message,
    ].filter((line) => line !== null);

    const command = new SendEmailCommand({
        FromEmailAddress: FROM_EMAIL,
        Destination: { ToAddresses: [TO_EMAIL] },
        ReplyToAddresses: [email],
        Content: {
            Simple: {
                Subject: { Data: `New lead: ${name}` },
                Body: { Text: { Data: lines.join('\n') } },
            },
        },
    });

    await client.send(command);
}
