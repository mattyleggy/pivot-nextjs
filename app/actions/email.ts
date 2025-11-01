"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface DemoEmailData {
  email: string;
  location: string;
  reason: string;
  companySize: string;
}

interface WaitlistEmailData {
  name: string;
  email: string;
}

const locationLabels: Record<string, string> = {
  us: "United States",
  uk: "United Kingdom",
  ca: "Canada",
  au: "Australia",
  de: "Germany",
  fr: "France",
  other: "Other",
};

const reasonLabels: Record<string, string> = {
  evaluate: "Evaluating options",
  learn: "Learn more about Pivot",
  specific: "Specific use case",
  other: "Other",
};

function createDemoEmailTemplate(data: DemoEmailData) {
  const location = locationLabels[data.location] || data.location;
  const reason = reasonLabels[data.reason] || data.reason;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #ffffff; border-radius: 8px; padding: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h1 style="color: #111827; font-size: 28px; margin-bottom: 20px; font-family: serif;">Thank you for booking a Pivot demo!</h1>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
      Hi there,
    </p>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
      Thank you for your interest in Pivot! We've received your demo request and we're excited to show you how Pivot can help your marketing team test ideas faster.
    </p>
    
    <div style="background-color: #f9fafb; border-left: 4px solid #111827; padding: 20px; margin: 30px 0; border-radius: 4px;">
      <h2 style="color: #111827; font-size: 18px; margin-top: 0; margin-bottom: 15px;">Your Request Details:</h2>
      <p style="margin: 8px 0; color: #4b5563;"><strong>Email:</strong> ${data.email}</p>
      <p style="margin: 8px 0; color: #4b5563;"><strong>Location:</strong> ${location}</p>
      <p style="margin: 8px 0; color: #4b5563;"><strong>Reason:</strong> ${reason}</p>
      <p style="margin: 8px 0; color: #4b5563;"><strong>Company Size:</strong> ${data.companySize} employees</p>
    </div>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
      Our team will be in touch shortly to schedule a personalized demo that fits your needs. We'll send you a calendar invite with available times.
    </p>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 30px;">
      If you have any questions in the meantime, feel free to reply to this email.
    </p>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 10px;">
      Best regards,<br>
      <strong style="color: #111827;">Jay C</strong><br>
      <span style="color: #6b7280; font-size: 14px;">Pivot Team</span>
    </p>
  </div>
</body>
</html>
  `;
}

function createWaitlistEmailTemplate(data: WaitlistEmailData) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #ffffff; border-radius: 8px; padding: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h1 style="color: #111827; font-size: 28px; margin-bottom: 20px; font-family: serif;">Welcome to the Pivot waitlist!</h1>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
      Hi ${data.name},
    </p>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
      Thank you for joining the Pivot waitlist! We're thrilled to have you on board as we prepare for launch.
    </p>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
      You're now part of an exclusive group of early adopters who will be the first to experience Pivot when we launch. Over <strong style="color: #111827;">300,000 users</strong> have already joined, and that number keeps growing!
    </p>
    
    <div style="background-color: #f9fafb; border-left: 4px solid #111827; padding: 20px; margin: 30px 0; border-radius: 4px;">
      <h2 style="color: #111827; font-size: 18px; margin-top: 0; margin-bottom: 15px;">What's Next?</h2>
      <ul style="margin: 0; padding-left: 20px; color: #4b5563;">
        <li style="margin-bottom: 10px;">Get early access when we launch</li>
        <li style="margin-bottom: 10px;">Receive exclusive updates and behind-the-scenes content</li>
        <li style="margin-bottom: 10px;">Access special launch pricing when Pivot is ready</li>
      </ul>
    </div>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
      We'll keep you updated on our progress and notify you as soon as Pivot is ready for you to use.
    </p>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 30px;">
      If you have any questions, feel free to reply to this email.
    </p>
    
    <p style="color: #4b5563; font-size: 16px; margin-bottom: 10px;">
      Best regards,<br>
      <strong style="color: #111827;">Jay C</strong><br>
      <span style="color: #6b7280; font-size: 14px;">Pivot Team</span>
    </p>
  </div>
</body>
</html>
  `;
}

export async function sendDemoEmail(data: DemoEmailData) {
  try {
    const result = await resend.emails.send({
      from: "Jay C <jay@pivotapp.com.au>",
      to: data.email,
      bcc: ["matty.j.lord@gmail.com"],
      subject: "Thank you for booking a Pivot demo!",
      html: createDemoEmailTemplate(data),
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { success: false, error: result.error.message };
    }

    console.log("Email sent successfully:", result.data?.id);
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error("Email send exception:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

export async function sendWaitlistEmail(data: WaitlistEmailData) {
  try {
    const result = await resend.emails.send({
      from: "Jay C <jay@pivotapp.com.au>",
      to: data.email,
      bcc: ["matty.j.lord@gmail.com"],
      subject: "Welcome to the Pivot waitlist!",
      html: createWaitlistEmailTemplate(data),
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { success: false, error: result.error.message };
    }

    console.log("Email sent successfully:", result.data?.id);
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error("Email send exception:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

