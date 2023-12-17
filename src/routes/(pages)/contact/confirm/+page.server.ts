import { getCookie } from "$lib/features/contact/server";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ cookies }) => {
  const formRequest = getCookie(cookies);

  if (!formRequest.name || !formRequest.email || !formRequest.message)
    throw redirect(301, "/contact");

  return { formRequest };
};
