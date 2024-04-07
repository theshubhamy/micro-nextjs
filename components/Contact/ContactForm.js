import React, { Fragment, useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// const MySwal = withReactContent(Swal);
// import baseUrl from "../../utils/baseUrl";

// const alertContent = () => {
//   MySwal.fire({
//     title: "Congratulations!",
//     text: "Your message was successfully send and will back to you soon",
//     icon: "success",
//     timer: 2000,
//     timerProgressBar: true,
//     showConfirmButton: false,
//   });
// };

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="col-lg-12 col-md-12 d-flex main-contact-area pb-50 pt-50 mt-5">
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8 contact-wrap contact-pages mb-0">
          <div className="contact-from">
            <div className="section-title">
              <h2>Get in touch</h2>
              <p>
                Share your inquiries, feedback, or any assistance you may need,
                and our dedicated team will promptly respond to ensure your
                satisfaction.
              </p>
            </div>

            <form >
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Your email address"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Your Subject"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="6"
                      className="form-control"
                      placeholder="Your message..."
                      value={contact.text}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                  <button type="submit" className="default-btn page-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mx-0 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center">
          <img
            src="https://img.freepik.com/free-photo/pretty-smiling-woman-transperent-glasses_231208-6458.jpg?w=360&t=st=1707404245~exp=1707404845~hmac=c5585b4342281e9e0a370597cd709b916c15f74cbb63b7f1c4e89f4034b75307"
            alt="contact-page-img"
          />
        </div>
        </div>
        
      </div>
    </Fragment>
  );
};

export default ContactForm;
