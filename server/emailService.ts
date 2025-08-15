import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

// Log the API key length for debugging (without exposing the key)
console.log('SendGrid API Key configured, length:', process.env.SENDGRID_API_KEY?.length);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const msg = {
      to: 'arshakachu29@gmail.com',
      from: 'arshakachu29@gmail.com', // Use your own email as sender since it's verified
      subject: `Portfolio Contact: ${formData.subject}`,
      text: `
New contact form submission from your portfolio website:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
You can reply directly to ${formData.email}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">📧 New Portfolio Contact</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
            <h3 style="color: #667eea; margin-bottom: 15px;">Contact Details</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${formData.name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${formData.subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Message:</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; line-height: 1.6;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <a href="mailto:${formData.email}?subject=Re: ${formData.subject}" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Reply to ${formData.name}</a>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>This email was sent from your portfolio website contact form.</p>
          </div>
        </div>
      `,
      replyTo: formData.email
    };

    console.log('Attempting to send email to:', msg.to);
    await sgMail.send(msg);
    console.log('Email sent successfully');
    return true;
  } catch (error: any) {
    console.error('SendGrid email error details:', {
      message: error.message,
      code: error.code,
      response: error.response?.body
    });
    return false;
  }
}