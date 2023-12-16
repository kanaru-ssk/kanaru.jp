export type FormSchema = {
  name: string;
  email: string;
  message: string;
};

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
