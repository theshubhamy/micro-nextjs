import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

const LandingBanner = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-2">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 homepage-banner-imgs"
                  src="https://demo2.wpthemego.com/themes/sw_emarket/layout23/wp-content/uploads/2020/08/slider-23-1.jpg"
                  alt="homepage-banner-imgs"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 homepage-banner-imgs"
                  src="https://t3.ftcdn.net/jpg/02/32/15/20/360_F_232152041_MteUXPM1X4arQHQSCPPFFGE4I44SOCFb.jpg"
                  alt="homepage-banner-imgs"
                />
              </Carousel.Item>
              
            </Carousel>
          </div>
          <div className="col-lg-4">
            <div className="row mb-2" style={{ height: "50%" }}>
              <div className="col">
                <img
                  src="https://demo2.wpthemego.com/themes/sw_emarket/layout23/wp-content/uploads/2020/08/banner-23-1.jpg"
                  className="d-block homepage-banner-right-img"
                  alt="Second slide"
                />
              </div>
            </div>
            <div className="row" style={{ height: "50%" }}>
              <div className="col">
                <img
                  src="https://demo2.wpthemego.com/themes/sw_emarket/layout23/wp-content/uploads/2020/08/banner-23-2.jpg"
                  className="d-block homepage-banner-right-img"
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingBanner;
