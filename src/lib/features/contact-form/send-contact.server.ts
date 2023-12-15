import { setApiKey, send } from "@sendgrid/mail";
import { SENDGRID_API_KEY, OWNER_EMAIL, FORM_EMAIL } from "$env/static/private";
import type { FormSchema } from "./validation";

export async function sendContact(data: FormSchema) {
  setApiKey(SENDGRID_API_KEY);
  const toCustomerMail = {
    to: data.email,
    from: FORM_EMAIL,
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
  };
  const toOwnerMail = {
    to: OWNER_EMAIL,
    from: FORM_EMAIL,
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
  };

  try {
    await Promise.all([send(toCustomerMail), send(toOwnerMail)]);
    return { success: true };
  } catch {
    return { success: false };
  }
}
