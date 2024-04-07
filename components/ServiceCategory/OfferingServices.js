import Link from "next/link";
import React, { Fragment } from "react";

const OfferingServices = () => {
  return (
    <Fragment>
      <div className="container services-container">
        <div className="text-center service-offer-content">
          <h4 className="small-title">WHAT WE DO</h4>
          <h2 className="title">Experience our top-notch services for you!</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <Link href="/tv-connect-and-setup">
              <div className="service-icon">
                <img
                  src="https://img.freepik.com/free-vector/tiny-business-people-watching-modern-ultra-hd-smart-television-uhd-smart-tv-ultra-high-definition-4k-8k-display-technology-concept_335657-2419.jpg?w=996&t=st=1699623315~exp=1699623915~hmac=1d7f9de08721b4ed1d189f50d8f1645c49e526d4b13cad0ae045f4aeb59c0008"
                  alt="Service Icon 1"
                  className="offer-service-img"
                />
                <h4 className="service-title">TV Connect and Setup</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-2">
            <Link href="/cell-phone-repair">
              <div className="service-icon">
                <img
                  src="https://img.freepik.com/free-vector/product-teardown-concept-illustration_114360-1580.jpg?w=740&t=st=1699623370~exp=1699623970~hmac=67acf33c57a54d1b093152e12aa2bc7027b23813aa42607525e9bd07e91947b7"
                  alt="Service Icon 1"
                  className="offer-service-img"
                />
                <h4 className="service-title">Cell Phone Repair</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-2">
            <Link href="/home-wifi-Setup">
              <div className="service-icon">
                <img
                  src="https://img.freepik.com/free-vector/internet-day-concept-illustration_114360-5303.jpg?w=740&t=st=1699623488~exp=1699624088~hmac=f38df5811f7dcaff3b76a18f013ddb6ce8d73ab6cc87a628a04252d646c3f6e8"
                  alt="Service Icon 1"
                  className="offer-service-img"
                />
                <h4 className="service-title">Home WI-FI Setup</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-2">
            <Link href="/data-recovery">
              <div className="service-icon">
                <img
                  src="https://img.freepik.com/free-vector/memory-storage-concept-illustration_114360-3888.jpg?w=740&t=st=1699623565~exp=1699624165~hmac=343ba7d6fdd276fde9def65b0f72a2b2f9757f8cf6f0968dd72e518839ded295"
                  alt="Service Icon 1"
                  className="offer-service-img"
                />
                <h4 className="service-title">Data Recovery</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-2">
            <Link href="/virus-and-spyware-removal">
              <div className="service-icon">
                <img
                  src="https://img.freepik.com/free-vector/character-illustration-people-with-cyber-crime-icons_53876-59873.jpg?w=900&t=st=1699623635~exp=1699624235~hmac=d1cfc367cd5eefb6df1ed52813d6071cf159e9c6306af113bc74dd0fc26b9af7"
                  alt="Service Icon 1"
                  className="offer-service-img"
                />
                <h4 className="service-title">Virus and Spyware Removal</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OfferingServices;
