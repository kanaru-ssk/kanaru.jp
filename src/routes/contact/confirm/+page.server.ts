import { getCookie } from "$lib/features/contact-form";

export const load = ({ cookies }) => {
  const formData = getCookie(cookies);
  return { formData };
};
