/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const AboutUs = () =>{
  return (
    <div className="container col-md-12 all-container-div">
      <div className="row">
        <div className="left-column col-md-6">
          <div className="row">
            <img
              src="/images/about-us.avif"
              alt="Image 3"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="right-column col-md-6">
          <div className="row">
            <div className="right-column-content">
              <h4 className="small-title">---- ABOUT MicroRepairs</h4>
              <h2 className="big-title">
                Welcome to MicroRepairs : Your Tech Solutions Hub!
              </h2>
              {/* <p className="abt-repair-service-desc-1">
                Call to book an appointment today and <a href="#">click here</a>{" "}
                to learn more about our professional team.
              </p> */}
              <p className="abt-repair-service-desc-2">
                Are you looking for reliable and expert assistance in the
                ever-evolving world of technology? Look no further! At
                MicroRepairs, we're committed to simplifying your tech
                experience by offering a range of specialized services tailored
                to your needs.
              </p>
              <div className="abt-repair-service-div">
                <div className="row">
                  <div className="col-md-6">
                    {/* Printing Problems */}

                    <ul>
                      <li>Printer Configuration</li>
                      <li>Printer Connectivity Issues</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>Print Queue Troubleshooting</li>
                      <li>Scanning Issues</li>
                    </ul>
                  </div>
                  <div className="col-md-12 call-now-btn-no-div">
                    <button className="call-now-button">Call Now</button>
                    <p className="contact-no-text">(000) 000-0000</p>
                  </div>
                  <div className="service-button-container">
                    <Link href="/">
                      <button className="btn btn-primary">
                        Learn More About Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
