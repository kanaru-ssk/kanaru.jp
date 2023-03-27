import { useState } from "react";
import Heading2 from "@/components/atoms/Heading2";
import Section from "@/components/atoms/Section";
import Form from "./Form";
// import SendError from "./SendError";
// import SendSuccess from "./SendSuccess";

type ViewStatus = "Form" | "Success" | "Error";

const Contact = () => {
  const [viewStatus, setViewStatus] = useState<ViewStatus>("Form");
  return (
    <Section>
      <Heading2>Contact</Heading2>

      <p>{viewStatus}</p>
      <Form setViewStatus={setViewStatus} />
    </Section>
  );
};

export default Contact;
