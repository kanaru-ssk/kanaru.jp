import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { FormLabel } from "./FormLabel";
import { ResultMessage } from "./ResultMessage";
import { SubmitButton } from "./SubmitButton";

type IFormInput = {
  name: string;
  email: string;
  message: number;
};

export const Form = () => {
  const { register, formState, handleSubmit, setError, resetField } =
    useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await fetch("/api/contact", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    if (result?.isSuccess) {
      setError("root", {
        type: "success",
        message:
          "Thank you for contacting me! Your message has been sent successfully. I will respond to you as soon as possible.",
      });
    } else {
      setError("root", {
        type: "error",
        message: result?.error?.message ?? "unknown error",
      });
    }
    resetField("name");
    resetField("email");
    resetField("message");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8">
        <div className="space-y-2 sm:space-y-8">
          <FormLabel label="name">
            <Input
              type="text"
              placeholder="your name"
              required
              {...register("name", { required: true })}
            />
          </FormLabel>
          <FormLabel label="email">
            <Input
              type="email"
              placeholder="example@example.com"
              required
              {...register("email", {
                required: true,
                pattern:
                  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
              })}
            />
          </FormLabel>
          <FormLabel label="message">
            <Textarea
              {...register("message", { required: true })}
              placeholder="Hello"
              required
            />
          </FormLabel>
        </div>
        <ResultMessage rootState={formState.errors.root} />
        <div className="text-center">
          <SubmitButton
            isValid={formState.isValid}
            isSubmitting={formState.isSubmitting}
          />
        </div>
      </div>
    </form>
  );
};
