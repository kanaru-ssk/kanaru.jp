import { promises as fs } from "fs";
import { STATUS_CODES } from "http";
import path from "path";
import type { MailDataRequired } from "@sendgrid/mail";
import sgMail from "@sendgrid/mail";
import Handlebars from "handlebars";
import type { NextApiRequest, NextApiResponse } from "next";
import { extractBodyContent } from "@/utils/extractBodyContent";

type Response =
  | {
      isSuccess: true;
    }
  | {
      isSuccess: false;
      error: Error;
    };

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  if (req.method !== "POST") {
    const errorCode = 400;
    return res.status(errorCode).json({
      isSuccess: false,
      error: {
        name: `[${errorCode}] ${STATUS_CODES[errorCode]}`,
        message:
          "Invalid Request Method. This endpoint only accepts POST requests.",
      },
    });
  }
  if (
    !process.env.SENDGRID_API_KEY ||
    !process.env.FORM_EMAIL ||
    !process.env.OWNER_EMAIL
  ) {
    const errorCode = 500;
    return res.status(errorCode).json({
      isSuccess: false,
      error: {
        name: `[${errorCode}] ${STATUS_CODES[errorCode]}`,
        message:
          "Internal Server Error. Sorry, something went wrong on our end. Please try again later.",
      },
    });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const FORM_EMAIL = process.env.FORM_EMAIL;
  const OWNER_EMAIL = process.env.OWNER_EMAIL;

  // create mail to customer
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
    customer_name: req.body.name,
    owner_email: OWNER_EMAIL,
  });
  const toCustomer: MailDataRequired = {
    to: req.body.email,
    from: FORM_EMAIL,
    subject: "Kanaru - Contact Received",
    html: toCustomerHTML,
  };

  // create mail to owner
  const toOwnerHbs = await fs.readFile(
    mailTemplateDirectory + "/toOwner.hbs",
    "utf8"
  );
  const toOwnerTemplate = Handlebars.compile(toOwnerHbs);
  const toOwner: MailDataRequired = {
    to: OWNER_EMAIL,
    from: FORM_EMAIL,
    subject: "New Contact Form Submission",
    html: toOwnerTemplate({
      customer_name: req.body.name,
      customer_email: req.body.email,
      customer_message: req.body.message,
      to_customer_html: extractBodyContent(toCustomerHTML),
    }),
  };

  try {
    await sgMail.send(toCustomer);
    await sgMail.send(toOwner);
    return res.status(200).json({ isSuccess: true });
  } catch (e) {
    if (e instanceof Error) {
      return res.status(500).json({ isSuccess: false, error: e });
    }
    const errorCode = 500;
    return res.status(500).json({
      isSuccess: false,
      error: {
        name: `[${errorCode}] ${STATUS_CODES[errorCode]}`,
        message: String(e),
      },
    });
  }
};

export default handler;
