import { z } from "zod";
import type { FormResponse } from "../types";

const FormRequest = z.object({
  name: z.string().max(50, "お名前は50文字以内で入力して下さい。"),
  email: z.string().email("メールアドレス形式が正しくありません。"),
  message: z.string(),
});

export function validation(formData: FormData): FormResponse {
  const validatedFields = FormRequest.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    data: validatedFields.data,
  };
}
