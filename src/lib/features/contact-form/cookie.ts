import type { Cookies } from "@sveltejs/kit";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().nullish(),
  email: z.string().nullish(),
  message: z.string().nullish(),
});

export function setCookie(cookies: Cookies, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (validatedFields.success) {
    cookies.set("name", validatedFields.data.name || "", {
      path: "/contact",
      httpOnly: true,
    });
    cookies.set("email", validatedFields.data.email || "", {
      path: "/contact",
      httpOnly: true,
    });
    cookies.set("message", validatedFields.data.message || "s", {
      path: "/contact",
      httpOnly: true,
    });
  }
}

export function getCookie(cookies: Cookies) {
  const name = cookies.get("name") || "";
  const email = cookies.get("email") || "";
  const message = cookies.get("message") || "";

  return {
    name,
    email,
    message,
  };
}
