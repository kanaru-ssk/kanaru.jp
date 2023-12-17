import type { Cookies } from "@sveltejs/kit";
import { z } from "zod";

const FormRequest = z.object({
  name: z.string().nullish(),
  email: z.string().nullish(),
  message: z.string().nullish(),
});

const option = {
  path: "/contact",
  maxAge: 60 * 60 * 24,
};

export function setCookie(cookies: Cookies, formData: FormData) {
  const validatedFields = FormRequest.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (validatedFields.success) {
    cookies.set("name", validatedFields.data.name || "", option);
    cookies.set("email", validatedFields.data.email || "", option);
    cookies.set("message", validatedFields.data.message || "", option);
  }
}

export function getCookie(cookies: Cookies) {
  const name = cookies.get("name") || "";
  const email = cookies.get("email") || "";
  const message = cookies.get("message") || "";

  return { name, email, message };
}

export function clearCookie(cookies: Cookies) {
  cookies.delete("name", option);
  cookies.delete("email", option);
  cookies.delete("message", option);
}
