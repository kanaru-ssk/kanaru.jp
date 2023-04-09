import { Heading2 } from "@/components/Heading2";
import { Form } from "@/features/contact/components/Form";

export const Contact = () => {
  return (
    <section id="contact" className="px-4">
      <div className="space-y-4 sm:space-y-12">
        <Heading2>Contact</Heading2>
        <Form />
      </div>
    </section>
  );
};
