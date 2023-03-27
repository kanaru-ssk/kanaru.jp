import Heading2 from "@/components/atoms/Heading2";
import Section from "@/components/atoms/Section";
import Form from "./Form";

const Contact = () => {
  return (
    <Section>
      <div className="space-y-8">
        <Heading2>Contact</Heading2>
        <Form />
      </div>
    </Section>
  );
};

export default Contact;
