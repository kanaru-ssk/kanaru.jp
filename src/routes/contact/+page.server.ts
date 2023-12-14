import { redirect, type Actions } from "@sveltejs/kit";
import { validation, setCookie, getCookie } from "$lib/features/contact-form";

export const load = ({ cookies }) => {
  const formData = getCookie(cookies);
  return { formData };
};

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    const formData = await request.formData();

    setCookie(cookies, formData);

    const result = validation(formData);
    if (result.success) {
      throw redirect(301, "/contact/confirm");
    } else {
      return { ...result };
    }
  },
};
