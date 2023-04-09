import { useState, useEffect, FormEvent } from "react";
import { Heading3 } from "@/components/Heading3";
import { InputEmail } from "./InputEmail";
import { InputMessage } from "./InputMessage";
import { InputName } from "./InputName";
import { StatusMessage } from "./StatusMessage";
import { SubmitButton } from "./SubmitButton";

type InputStatus = "Entering" | "Ready" | "Sending";

export type FormStatus = {
  isSuccess: boolean;
  message: string;
};

export const Form = () => {
  const [inputStatus, setInputStatus] = useState<InputStatus>("Entering");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<FormStatus>();

  useEffect(() => {
    const emailFormat =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (name !== "" && emailFormat.test(email) && message !== "") {
      setInputStatus("Ready");
    } else {
      setInputStatus("Entering");
    }
  }, [name, email, message]);

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputStatus("Sending");
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    if (result?.isSuccess) {
      setStatus({
        isSuccess: true,
        message:
          "Thank you for contacting me! Your message has been sent successfully. I will respond to you as soon as possible.",
      });
    } else {
      setStatus({
        isSuccess: false,
        message: result?.error?.message ?? "unknown error",
      });
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="space-y-2 sm:space-y-8">
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <div className="w-28 py-1">
            <Heading3>name</Heading3>
          </div>
          <InputName value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <div className="w-28 py-1">
            <Heading3>email</Heading3>
          </div>
          <InputEmail
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-28 py-1">
            <Heading3>message</Heading3>
          </div>
          <InputMessage
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <StatusMessage status={status} />
        <div className="pt-8 text-center sm:pt-0">
          <SubmitButton inputStatus={inputStatus} />
        </div>
      </div>
    </form>
  );
};
