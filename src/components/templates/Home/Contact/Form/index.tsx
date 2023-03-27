import { useState, useEffect } from "react";
import InputEmail from "./InputEmail";
import InputMessage from "./InputMessage";
import InputName from "./InputName";
import SubmitButton from "./SubmitButton";

type InputStatus = "Entering" | "Ready" | "Sending";

const Form = () => {
  const [inputStatus, setInputStatus] = useState<InputStatus>("Entering");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const emailFormat =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (name !== "" && emailFormat.test(email) && message !== "") {
      setInputStatus("Ready");
    } else {
      setInputStatus("Entering");
    }
  }, [name, email, message]);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } else {
      setInputStatus("Entering");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mx-auto max-w-xl space-y-8">
        <div className="flex items-center">
          <h3 className="w-28 font-bold">name</h3>
          <InputName value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex items-center">
          <h3 className="w-28 font-bold">email</h3>
          <InputEmail
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex">
          <h3 className="w-28 pt-2 font-bold">message</h3>
          <InputMessage
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div className="text-center">
          <SubmitButton inputStatus={inputStatus} />
        </div>
      </div>
    </form>
  );
};

export default Form;
