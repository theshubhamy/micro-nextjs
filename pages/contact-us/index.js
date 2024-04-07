import React, { Fragment } from "react";
import ContactForm from "~/components/Contact/ContactForm";
import ContactInfo from "~/components/Contact/ContactInfo";

const Contact = () => {
  return (
    <Fragment>
      <ContactInfo />
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
