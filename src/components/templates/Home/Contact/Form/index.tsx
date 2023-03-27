import { useState, useEffect } from "react";
import InputEmail from "./InputEmail";
import InputMessage from "./InputMessage";
import InputName from "./InputName";
import SubmitButton from "./SubmitButton";

type ViewStatus = "Form" | "Success" | "Error";
type InputStatus = "Entering" | "Ready" | "Sending";

type Props = {
  setViewStatus: React.Dispatch<React.SetStateAction<ViewStatus>>;
};

const Form = ({ setViewStatus }: Props) => {
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
      setViewStatus("Success");
    } else {
      setViewStatus("Error");
      setInputStatus("Entering");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="py-2">
        <h3 className="py-2">name</h3>
        <InputName value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="py-2">
        <h3 className="py-2">email</h3>
        <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="py-2">
        <h3 className="py-2">message</h3>
        <InputMessage
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div className="py-4 text-center">
        <SubmitButton inputStatus={inputStatus} />
      </div>
    </form>
  );
};

export default Form;
