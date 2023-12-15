import { getCookie, clearCookie } from "$lib/features/contact-form";

export const load = ({ cookies }) => {
  const formData = getCookie(cookies);
  clearCookie(cookies);
  return { formData };
};
