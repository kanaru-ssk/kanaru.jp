import { redirect, error, type Actions } from "@sveltejs/kit";
import { getCookie, setCookie, validation } from "$lib/features/contact/server";
import { sendMail } from "$lib/features/contact/server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ cookies }) => {
  const formRequest = getCookie(cookies);
  return { formRequest };
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

    const result = await sendMail(validated.data);
    if (!result.success) throw error(500, "internal server error");

    throw redirect(301, "/contact/complete");
  },
};
