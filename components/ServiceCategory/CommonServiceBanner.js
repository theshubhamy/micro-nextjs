import Link from "next/link";
import React, { Fragment } from "react";
import { MdDoubleArrow } from "react-icons/md";

const CommonServiceBanner = ({
  title,
  list1,
  list2,
  bannerPrice,
  bannerImg,
}) => {
  return (
    <Fragment>
      <div className="container-fluid services-container others-services-container-bg">
        <div className="col-md-12">
          <div className="row">
            {/* First Column */}
            <div className="col-md-7 common-service-banner-content">
              <h1 style={{ marginLeft: "20px", letterSpacing: "1px" }}>
                {" "}
                {title} :
              </h1>
              <ul style={{ textAlign: "justify" }}>
                <li>
                  <MdDoubleArrow
                    className="FaArrows-list-icons"
                    style={{ fontSize: "14px", color: "#4a8bed" }}
                  />{" "}
                  {list1}
                </li>
                <li>
                  <MdDoubleArrow
                    className="FaArrows-list-icons"
                    style={{ fontSize: "14px", color: "#4a8bed" }}
                  />{" "}
                  {list2}
                </li>
              </ul>

              <div className="common-service-schedule-card-div">
                <span className="new-price mx-4">
                  <span className="banner-price-text">Price :</span>
                  <span
                    className="banner-price"
                    style={{ color: "#4a8bed" }}
                  >
                    {" "}
                    $ {bannerPrice}
                  </span>
                </span>

                <Link href="#">
                  <button className="all-products-add-cart-btn btn btn-primary shadow">
                    Chat With MicroRepairs Experts
                  </button>
                </Link>
              </div>
              <h5 className="banner-schedule-card-title2 mt-4">
                Call MicroRepairs Experts :
                <span className="schedule-service-contact">
                  {" "}
                  (000) 000-0000
                </span>
              </h5>
            </div>

            {/* Second Column */}

            <div className="col-md-5 common-service-banner-img-div">
              <img
                src={bannerImg}
                alt="Image"
                className="common-service-banner-img"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CommonServiceBanner;
