import { getCookie } from "$lib/features/contact/server";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ cookies }) => {
  const formData = getCookie(cookies);

  if (!formData.name || !formData.email || !formData.message)
    throw redirect(301, "/contact");

  return { formData };
};
