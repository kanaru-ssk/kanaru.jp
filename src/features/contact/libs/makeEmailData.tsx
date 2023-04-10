import { promises as fs } from "fs";
import path from "path";
import { type MailDataRequired } from "@sendgrid/mail";
import Handlebars from "handlebars";
import { extractBodyContent } from "./extractBodyContent";

type Props = {
  formEmail: string;
  ownerEmail: string;
  customerName: string;
  customerEmail: string;
  message: string;
};

export const makeEmailData = async ({
  formEmail,
  ownerEmail,
  customerName,
  customerEmail,
  message,
}: Props) => {
  try {
    // get template file
    const mailTemplateDirectory = path.join(
      process.cwd(),
      "src/features/contact/constants/mailTemplate"
    );
    const toCustomerHbs = await fs.readFile(
      mailTemplateDirectory + "/toCustomer.hbs",
      "utf8"
    );
    const toOwnerHbs = await fs.readFile(
      mailTemplateDirectory + "/toOwner.hbs",
      "utf8"
    );

    // create mail to customer
    const toCustomerTemplate = Handlebars.compile(toCustomerHbs);
    const toCustomerHTML = toCustomerTemplate({
      customer_name: customerName,
      owner_email: ownerEmail,
    });
    const toCustomerMail: MailDataRequired = {
      to: customerEmail,
      from: formEmail,
      subject: "Kanaru - Contact Received",
      html: toCustomerHTML,
    };

    // create mail to owner
    const toOwnerTemplate = Handlebars.compile(toOwnerHbs);
    const toOwnerEmail: MailDataRequired = {
      to: ownerEmail,
      from: formEmail,
      subject: "New Contact Form Submission",
      html: toOwnerTemplate({
        customer_name: customerName,
        customer_email: customerEmail,
        customer_message: message,
        to_customer_html: extractBodyContent(toCustomerHTML),
      }),
    };

    return { toCustomerMail, toOwnerEmail };
  } catch {
    return null;
  }
};
