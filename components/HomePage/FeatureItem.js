import React, { Fragment } from "react";

const FeatureItem = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="tp-feature__border">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="tp-feature__item feature-col-1 d-flex align-items-center">
                <div className="tp-feature__icon">
                  {/* You can add your icon component or image here */}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/310/310831.png"
                    alt="feature-item"
                    style={{width:"80px"}}
                  />
                </div>
                <div className="tp-feature__content">
                  <h4 className="tp-feature__title">Quality Design</h4>
                  <p>
                    Our online tools make the process as simple and clear as
                    possible, and
                  </p>
                </div>
              </div>
            </div>

            {/* ---------- */}

            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="tp-feature__item feature-col-2 d-flex align-items-center">
                <div className="tp-feature__icon">
                  {/* You can add your icon component or image here */}
                  <img
                    src="https://static.thenounproject.com/png/3203208-200.png"
                    alt="feature-item"
                    style={{width:"80px"}}
                  />
                </div>
                <div className="tp-feature__content">
                  <h4 className="tp-feature__title">Make It Mach</h4>
                  <p>
                    Our online tools make the process as simple and clear as
                    possible, and
                  </p>
                </div>
              </div>
            </div>

            {/* ---------- */}

            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="tp-feature__item feature-col-3 d-flex align-items-center">
                <div className="tp-feature__icon">
                  {/* You can add your icon component or image here */}
                  <img
                    src="https://static.thenounproject.com/png/3536126-200.png"
                    alt="feature-item"
                    style={{width:"80px"}}
                  />
                </div>
                <div className="tp-feature__content">
                  <h4 className="tp-feature__title">Absolutely Guranteed</h4>
                  <p>
                    Our online tools make the process as simple and clear as
                    possible, and
                  </p>
                </div>
              </div>
            </div>

            {/* ---------- */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FeatureItem;
