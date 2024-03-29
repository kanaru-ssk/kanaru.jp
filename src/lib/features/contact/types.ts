export type FormRequest = {
  name: string;
  email: string;
  message: string;
};

export type FormResponse =
  | {
      success: true;
      data: FormRequest;
    }
  | {
      success: false;
      errors: {
        name?: string[] | undefined;
        email?: string[] | undefined;
        message?: string[] | undefined;
      };
    };
