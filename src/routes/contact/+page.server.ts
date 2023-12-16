import { redirect, error, type Actions } from "@sveltejs/kit";
import { validation, setCookie, getCookie } from "$lib/features/contact-form";
import { sendContact } from "$lib/features/contact-form/send-contact.server";

export const load = ({ cookies }) => {
  const formData = getCookie(cookies);
  return { formData };
};

export const actions: Actions = {
  confirm: async ({ cookies, request }) => {
    const formData = await request.formData();
    setCookie(cookies, formData);
    const validated = validation(formData);

    if (!validated.success) return { ...validated };

    throw redirect(301, "/contact/confirm");
  },

  send: async ({ cookies, request }) => {
    const formData = await request.formData();
    setCookie(cookies, formData);
    const validated = validation(formData);

    if (!validated.success) return { ...validated };

    const result = await sendContact(validated.data);
    if (!result.success) throw error(500, "internal server error");

    throw redirect(301, "/contact/complete");
  },
};
