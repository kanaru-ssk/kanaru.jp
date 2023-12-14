import { z } from "zod";

const FormSchema = z.object({
  name: z.string().max(50),
  email: z.string().email(),
  message: z.string(),
});

export type FormSchema = z.infer<typeof FormSchema>;

export type FormResponse =
  | {
      success: true;
      data: FormSchema;
    }
  | {
      success: false;
      errors: {
        name?: string[] | undefined;
        email?: string[] | undefined;
        message?: string[] | undefined;
      };
    };

export function validation(formData: FormData): FormResponse {
  const validatedFields = FormSchema.safeParse({
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
