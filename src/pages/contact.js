import React from "react";
import Layout from "./components/layout";
import ContactForm from "./sections/contact/form";
import FAQs from "./sections/contact/faqs";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-96 flex flex-col justify-center items-center text-secondary">
        <ContactForm />
        <FAQs />
      </div>
    </Layout>
  );
};

export default Contact;
