import sgMail from "@sendgrid/mail";
import { SENDGRID_API_KEY, OWNER_EMAIL, FORM_EMAIL } from "$env/static/private";
import type { FormSchema } from "./validation";

type Mail = {
  to: string;
  from: string;
  subject: string;
  text: string;
};

export async function sendContact(data: FormSchema) {
  sgMail.setApiKey(SENDGRID_API_KEY);

  const toCustomer: Mail = {
    to: data.email,
    from: FORM_EMAIL,
    subject: "【佐々木哉瑠】お問い合わせありがとうございます",
    text: makeToCustomerText(data),
  };

  const toOwner: Mail = {
    to: OWNER_EMAIL,
    from: FORM_EMAIL,
    subject: "HPからお問い合せを受信しました",
    text: makeToOwnerText(data, toCustomer),
  };

  try {
    await sgMail.send([toCustomer, toOwner]);
    return { success: true };
  } catch {
    return { success: false };
  }
}

const makeToCustomerText = (data: FormSchema) => `
${data.name} 様

お問い合わせ頂きありがとうございます。佐々木哉瑠です。
内容を確認次第、折返しご連絡させていただきます。今しばらくお待ち下さい。

※このメールはkanaru.jpからお問い合わせいただいた方へ自動送信しております。
お心当たりのない方は、恐れ入りますが下記へその旨をご連絡いただけますと幸いです。

------------------------------
佐々木哉瑠
mail : ${OWNER_EMAIL}
------------------------------
`;

const makeToOwnerText = (data: FormSchema, toCustomer: Mail) => `
kanaru.jpのお問い合わせフォームから、以下の内容でお問い合わせがありました。

------------------------------
name : ${data.name}
mail : ${data.email}
message :
${data.message}
------------------------------


以下の内容を${toCustomer.from}より自動送信しています。
==============================
件名 : ${toCustomer.subject}
本文 :
${toCustomer.text}
==============================
`;
