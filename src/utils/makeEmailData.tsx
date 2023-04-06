import { promises as fs } from "fs";
import path from "path";
import type { MailDataRequired } from "@sendgrid/mail";
import Handlebars from "handlebars";
import { extractBodyContent } from "@/utils/extractBodyContent";

type Props = {
  name: string;
  email: string;
  message: string;
};

export const makeEmailData = async ({ name, email, message }: Props) => {
  if (!process.env.FORM_EMAIL || !process.env.OWNER_EMAIL) return null;

  const mailTemplateDirectory = path.join(
    process.cwd(),
    "src/constants/mailTemplate"
  );
  const toCustomerHbs = await fs.readFile(
    mailTemplateDirectory + "/toCustomer.hbs",
    "utf8"
  );
  const toCustomerTemplate = Handlebars.compile(toCustomerHbs);
  const toCustomerHTML = toCustomerTemplate({
    customer_name: name,
    owner_email: process.env.OWNER_EMAIL,
  });
  const toCustomerMail: MailDataRequired = {
    to: email,
    from: process.env.FORM_EMAIL,
    subject: "Kanaru - Contact Received",
    html: toCustomerHTML,
  };

  // create mail to owner
  const toOwnerHbs = await fs.readFile(
    mailTemplateDirectory + "/toOwner.hbs",
    "utf8"
  );
  const toOwnerTemplate = Handlebars.compile(toOwnerHbs);
  const toOwnerEmail: MailDataRequired = {
    to: process.env.OWNER_EMAIL,
    from: process.env.FORM_EMAIL,
    subject: "New Contact Form Submission",
    html: toOwnerTemplate({
      customer_name: name,
      customer_email: email,
      customer_message: message,
      to_customer_html: extractBodyContent(toCustomerHTML),
    }),
  };

  return { toCustomerMail, toOwnerEmail };
};
