import type { Cookies } from "@sveltejs/kit";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().nullish(),
  email: z.string().nullish(),
  message: z.string().nullish(),
});

const path = "/contact";

export function setCookie(cookies: Cookies, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (validatedFields.success) {
    cookies.set("name", validatedFields.data.name || "", { path });
    cookies.set("email", validatedFields.data.email || "", { path });
    cookies.set("message", validatedFields.data.message || "", { path });
  }
}

export function getCookie(cookies: Cookies) {
  const name = cookies.get("name") || "";
  const email = cookies.get("email") || "";
  const message = cookies.get("message") || "";

  return { name, email, message };
}

export function clearCookie(cookies: Cookies) {
  cookies.delete("name", { path });
  cookies.delete("email", { path });
  cookies.delete("message", { path });
}
