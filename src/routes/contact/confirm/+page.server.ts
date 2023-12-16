import { getCookie } from "$lib/features/contact-form";
import { redirect } from "@sveltejs/kit";

export const load = ({ cookies }) => {
  const formData = getCookie(cookies);

  if (!formData.name || !formData.email || !formData.message)
    throw redirect(301, "/contact");

  return { formData };
};
