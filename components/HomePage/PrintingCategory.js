import Link from "next/link";
import React, { Fragment } from "react";

const PrintingCategory = () => {
  return (
    <Fragment>
      <div className="container my-5 pt-5">
        <div className="text-center service-offer-content">
          <h4 className="small-title">WHAT WE DO</h4>
          <h2 className="title">Experience our top-notch services for you!</h2>
        </div>
        <div className="row">
          <div className="col-md-2">
            <Link className="cate-item text-center" href="/">
              <div className="item-slider-global-category4">
                <>
                  <span className="adv-thumb-link">
                    {/* <span className="count">1</span> */}
                    <img
                      src="https://img.freepik.com/free-vector/printing-invoices-concept-illustration_114360-1530.jpg?w=740&t=st=1699623070~exp=1699623670~hmac=fa30bebd3f5345e66d0706842446b18c702a69e438d1064f6c1fa5435b86a285"
                      className="attachment-full size-full"
                      alt=""
                    />
                  </span>
                  <h2
                    className="service-info-title text-center"
                    style={{ fontSize: "16px", letterSpacing: "0.5px" }}
                  >
                    Printers and Scanners Setup
                  </h2>
                </>
              </div>
            </Link>
          </div>

          {/* --------- */}
          <div className="col-md-2">
            <Link
              className="cate-item text-center"
              href="/tv-connect-and-setup"
            >
              <div className="item-slider-global-category4">
                <>
                  <span className="adv-thumb-link">
                    {/* <span className="count">2</span> */}
                    <img
                      src="https://img.freepik.com/free-vector/tiny-business-people-watching-modern-ultra-hd-smart-television-uhd-smart-tv-ultra-high-definition-4k-8k-display-technology-concept_335657-2419.jpg?w=996&t=st=1699623315~exp=1699623915~hmac=1d7f9de08721b4ed1d189f50d8f1645c49e526d4b13cad0ae045f4aeb59c0008"
                      className="attachment-full size-full"
                      alt=""
                    />
                  </span>
                  <h2
                    className="service-info-title text-center"
                    style={{ fontSize: "16px", letterSpacing: "0.5px" }}
                  >
                    TV Connect and Setup
                  </h2>
                </>
              </div>
            </Link>
          </div>

          {/* --------- */}
          <div className="col-md-2">
            <Link className="cate-item text-center" href="/cell-phone-repair">
              <div className="item-slider-global-category4">
                <>
                  <span className="adv-thumb-link">
                    {/* <span className="count">3</span> */}
                    <img
                      src="https://img.freepik.com/free-vector/product-teardown-concept-illustration_114360-1580.jpg?w=740&t=st=1699623370~exp=1699623970~hmac=67acf33c57a54d1b093152e12aa2bc7027b23813aa42607525e9bd07e91947b7"
                      className="attachment-full size-full"
                      alt=""
                    />
                  </span>
                  <h2
                    className="service-info-title text-center"
                    style={{ fontSize: "16px", letterSpacing: "0.5px" }}
                  >
                    Cell Phone Repair
                  </h2>
                </>
              </div>
            </Link>
          </div>

          {/* --------- */}
          <div className="col-md-2">
            <Link className="cate-item text-center" href="/home-wifi-Setup">
              <div className="item-slider-global-category4">
                <>
                  <span className="adv-thumb-link">
                    {/* <span className="count">4</span> */}
                    <img
                      src="https://img.freepik.com/free-vector/internet-day-concept-illustration_114360-5303.jpg?w=740&t=st=1699623488~exp=1699624088~hmac=f38df5811f7dcaff3b76a18f013ddb6ce8d73ab6cc87a628a04252d646c3f6e8"
                      className="attachment-full size-full"
                      alt=""
                    />
                  </span>
                  <h2
                    className="service-info-title text-center"
                    style={{ fontSize: "16px", letterSpacing: "0.5px" }}
                  >
                    Home WI-FI Setup
                  </h2>
                </>
              </div>
            </Link>
          </div>

          {/* --------- */}
          <div className="col-md-2">
            <Link className="cate-item text-center" href="/data-recovery">
              <div className="item-slider-global-category4">
                <>
                  <span className="adv-thumb-link">
                    {/* <span className="count">5</span> */}
                    <img
                      src="https://img.freepik.com/free-vector/memory-storage-concept-illustration_114360-3888.jpg?w=740&t=st=1699623565~exp=1699624165~hmac=343ba7d6fdd276fde9def65b0f72a2b2f9757f8cf6f0968dd72e518839ded295"
                      className="attachment-full size-full"
                      alt=""
                    />
                  </span>
                  <h2
                    className="service-info-title text-center"
                    style={{ fontSize: "16px", letterSpacing: "0.5px" }}
                  >
                    Data Recovery
                  </h2>
                </>
              </div>
            </Link>
          </div>

          {/* --------- */}
          <div className="col-md-2">
            <Link
              className="cate-item text-center"
              href="/virus-and-spyware-removal"
            >
              <div className="item-slider-global-category4">
                <>
                  <span className="adv-thumb-link">
                    {/* <span className="count">6</span> */}
                    <img
                      src="https://img.freepik.com/free-vector/character-illustration-people-with-cyber-crime-icons_53876-59873.jpg?w=900&t=st=1699623635~exp=1699624235~hmac=d1cfc367cd5eefb6df1ed52813d6071cf159e9c6306af113bc74dd0fc26b9af7"
                      className="attachment-full size-full"
                      alt=""
                    />
                  </span>
                  <h2
                    className="service-info-title text-center"
                    style={{ fontSize: "16px", letterSpacing: "0.5px" }}
                  >
                    Virus and Spyware Removal
                  </h2>
                </>
              </div>
            </Link>
          </div>

          {/* --------- */}
        </div>
      </div>
    </Fragment>
  );
};

export default PrintingCategory;
