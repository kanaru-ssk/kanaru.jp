import { STATUS_CODES } from "http";
import sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { makeEmailData } from "@/utils/makeEmailData";

type Response =
  | {
      isSuccess: true;
    }
  | {
      isSuccess: false;
      error: Error;
    };

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  if (req.method !== "POST")
    return res.status(400).json({
      isSuccess: false,
      error: {
        name: `[${400}] ${STATUS_CODES[400]}`,
        message:
          "Invalid Request Method. This endpoint only accepts POST requests.",
      },
    });

  const emailData = await makeEmailData({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  if (!emailData || !process.env.SENDGRID_API_KEY)
    return res.status(500).json({
      isSuccess: false,
      error: {
        name: `[${500}] ${STATUS_CODES[500]}`,
        message:
          "Internal Server Error. Sorry, something went wrong on our end. Please try again later.",
      },
    });

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send(emailData.toCustomerMail);
    await sgMail.send(emailData.toOwnerEmail);
    return res.status(200).json({ isSuccess: true });
  } catch (e) {
    if (e instanceof Error) {
      return res.status(500).json({ isSuccess: false, error: e });
    }
    return res.status(500).json({
      isSuccess: false,
      error: {
        name: `[${500}] ${STATUS_CODES[500]}`,
        message: String(e),
      },
    });
  }
};

export default handler;
