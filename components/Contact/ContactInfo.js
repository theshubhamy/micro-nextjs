import React, { Fragment } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { FaHeadset, FaEnvelopeOpenText, FaMapMarkedAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Fragment>
      <section className="contact-info-area pt-50 mb-5">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>CONTACT US</h2>
            </div>
            <div class="contact-info-container">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-lg-3">
                  <div class="contact-details-box-Box">
                    <div class="service-icon">
                      <span>
                        <i class="bx bx-envelope"></i>
                      </span>
                    </div>
                    <h3 class="title">Email Us</h3>
                    <p class="description">support@techbuildzllc.us</p>
                  </div>
                </div>

                {/* ----- */}
                <div class="col-md-6 col-sm-6 col-lg-3">
                  <div class="contact-details-box-Box">
                    <div class="service-icon">
                      <span>
                        <i class="bx bx-phone-call"></i>
                      </span>
                    </div>
                    <h3 class="title">Call Us</h3>
                    <p class="description">Tel. +1 (000)-000-0000</p>
                  </div>
                </div>

                {/* ----- */}
                <div class="col-md-6 col-sm-6 col-lg-3">
                  <div class="contact-details-box-Box">
                    <div class="service-icon">
                      <span>
                        <i class="bx bx-location-plus"></i>
                      </span>
                    </div>
                    <h3 class="title">Address</h3>
                    <p class="description">352 Pine st. Reading pa 19602</p>
                  </div>
                </div>

                {/* ----- */}
                <div class="col-md-6 col-sm-6 col-lg-3">
                  <div class="contact-details-box-Box">
                    <div class="service-icon">
                      <span>
                        <i class="bx bx-support"></i>
                      </span>
                    </div>
                    <h3 class="title">Live Chat</h3>
                    <p class="description">
                      24/7, Always Available for Live Chat
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      {/* -------- */}
    </Fragment>
  );
};

export default ContactInfo;
