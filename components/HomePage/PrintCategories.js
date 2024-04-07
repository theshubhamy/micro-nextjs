import React, { Fragment } from "react";
import { PiHandsClappingBold } from "react-icons/pi";

const PrintCategories = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="tp-catagori__section-box text-center pb-55">
              <span className="tp-section-subtitle">All print categories</span>
              <h3 className="tp-section-title">
                Explore all{" "}
                <span style={{ position: "relative" }}>
                  categories
                  <span className="tp-title-shape">
                    <svg
                      width="244"
                      height="4"
                      viewBox="0 0 244 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M240.76 3.21678C241.508 3.21678 242.754 3.18881 243.502 3.24476C242.256 3.24476 241.01 3.27273 240.013 3.27273C239.514 3.32867 240.76 3.35664 241.259 3.38462C242.256 3.38462 243.252 3.38462 244 3.44056C243.252 3.46853 242.256 3.46853 241.259 3.46853C240.262 3.46853 239.016 3.44056 238.268 3.4965C239.016 3.52448 239.016 3.52448 239.016 3.58042C237.272 3.60839 237.272 3.77622 234.53 3.72028C233.534 3.72028 232.537 3.72028 231.54 3.72028C230.294 3.83217 228.799 3.94406 225.559 3.88811C224.562 3.91608 223.566 3.91608 222.569 3.88811C219.828 3.94406 217.086 3.91608 214.345 3.94406C214.096 3.97203 213.847 3.97203 213.598 3.94406C212.601 3.94406 211.604 3.94406 210.607 3.94406H210.358H210.109C209.112 3.94406 208.364 3.97203 207.368 3.94406C203.879 3.94406 200.141 3.94406 196.652 3.97203C194.409 3.97203 192.665 3.94406 191.419 3.86014H191.17H190.92C190.173 3.91608 190.422 4 187.93 4C185.438 3.97203 182.946 3.97203 180.205 3.97203C178.46 3.94406 176.716 4 174.972 3.97203C168.742 3.94406 162.512 3.94406 156.282 3.91608C150.799 3.91608 145.317 3.88811 139.834 3.86014C137.841 3.91608 135.847 3.86014 134.103 3.86014C124.135 3.83217 113.918 3.83217 103.95 3.74825C99.464 3.72028 94.9784 3.74825 90.4928 3.69231C86.5056 3.69231 82.7676 3.66434 78.7804 3.63636C69.56 3.58042 60.3396 3.52448 51.3684 3.41259C47.6304 3.41259 44.1417 3.38462 40.9021 3.3007C35.6689 3.3007 30.6849 3.21678 25.9501 3.13287C25.2025 3.13287 24.7041 3.1049 24.2057 3.1049C22.2121 3.13287 20.7169 3.07692 18.9725 3.02098C17.7265 3.02098 16.7297 2.99301 15.9821 2.96504C15.2345 2.93706 14.4869 2.93706 13.7393 2.90909C12.9917 2.85315 11.7457 2.85315 10.4997 2.85315C8.50606 2.7972 6.01407 2.76923 5.51567 2.62937C1.77767 2.6014 0.780863 2.48951 1.03006 2.34965C-0.465136 2.18182 -0.215937 2.01399 1.03006 1.84615C1.03006 1.76224 1.03006 1.67832 1.03006 1.59441V1.56643C0.531663 1.37063 3.27286 1.2028 2.52526 1.03497C2.27606 0.895105 3.77124 0.783217 4.76804 0.671329C4.76804 0.643357 4.76806 0.587413 5.76486 0.559441C6.01406 0.531469 6.76167 0.503497 7.75847 0.475525C9.00447 0.363636 10.4996 0.27972 12.9916 0.251748C13.49 0.195804 14.4868 0.223776 15.2344 0.223776C15.982 0.195804 16.7296 0.167832 17.4772 0.13986C18.2248 0.111888 18.9724 0.111888 19.72 0.111888C22.7104 0.0559441 25.7008 0.027972 28.9404 0.027972C30.1864 0.027972 31.1833 0.027972 32.4293 0.027972C32.9277 0.027972 33.6752 0.027972 34.1736 0C40.902 0 47.8797 0 54.6081 0.027972C58.0969 0.027972 61.5856 0 65.0744 0.0839161C68.0648 0.0839161 71.5536 0.027972 74.7932 0.111888C75.5408 0.111888 76.2884 0.111888 76.7868 0.111888C79.0296 0.0839161 81.0233 0.0839161 83.2661 0.111888C88.7485 0.111888 94.2308 0.13986 99.464 0.167832C101.208 0.167832 103.202 0.13986 104.697 0.195804C105.694 0.223776 106.691 0.223776 107.688 0.195804C110.927 0.195804 114.167 0.195804 117.406 0.223776C117.905 0.223776 118.403 0.223776 118.902 0.223776C120.148 0.251748 121.643 0.223776 122.889 0.251748C124.633 0.251748 126.627 0.251748 128.371 0.251748C129.866 0.251748 131.611 0.251748 132.857 0.27972C133.854 0.27972 134.85 0.27972 135.847 0.27972C137.841 0.27972 140.084 0.251748 142.077 0.307692C145.815 0.307692 149.553 0.335664 153.042 0.335664C159.023 0.335664 165.004 0.391608 170.984 0.41958C172.978 0.41958 174.722 0.41958 176.716 0.447552C174.972 0.447552 172.978 0.447552 171.234 0.447552C172.978 0.41958 174.972 0.41958 176.716 0.447552C179.956 0.447552 182.946 0.447553 185.936 0.503497C187.182 0.503497 188.428 0.503497 189.674 0.531469C189.924 0.531469 190.173 0.531469 190.422 0.531469C193.163 0.531469 195.904 0.559441 198.646 0.615385C201.138 0.615385 203.38 0.671329 205.623 0.699301C206.869 0.699301 208.115 0.699301 209.361 0.755245C211.604 0.783217 213.598 0.811189 214.345 0.895105C215.84 0.839161 216.837 0.895105 218.083 0.923077C219.329 0.979021 218.831 1.06294 220.326 1.11888C219.578 1.11888 218.831 1.11888 218.083 1.11888C218.332 1.14685 218.582 1.17483 218.831 1.17483C220.575 1.23077 222.32 1.25874 224.064 1.28671C224.313 1.28671 224.562 1.28671 224.812 1.28671C226.556 1.28671 228.55 1.25874 230.045 1.31469H230.294C230.294 1.31469 230.294 1.34266 230.045 1.34266C229.048 1.34266 228.051 1.34266 227.304 1.34266H227.054C228.3 1.31469 229.297 1.31469 230.045 1.34266C230.543 1.45455 229.048 1.48252 228.55 1.53846C228.799 1.56643 227.553 1.59441 228.55 1.62238C229.297 1.62238 230.543 1.59441 230.294 1.65035C230.045 1.70629 228.55 1.67832 227.802 1.67832C227.553 1.67832 227.304 1.70629 227.054 1.70629C229.048 1.79021 231.042 1.81818 233.035 1.87413C236.026 1.87413 237.272 1.98601 239.016 2.06993C239.514 2.0979 240.262 2.06993 240.511 2.0979C239.016 2.0979 239.764 2.18182 238.767 2.20979C235.278 2.26573 235.278 2.34965 238.518 2.46154C239.514 2.48951 241.508 2.51748 242.006 2.6014C242.006 2.62937 242.006 2.65734 242.006 2.65734C242.505 2.65734 243.003 2.65734 243.003 2.68531C242.754 2.74126 242.006 2.71329 241.259 2.71329C240.76 2.71329 240.013 2.71329 239.764 2.74126C240.262 2.82518 240.013 2.85315 238.518 2.85315C239.016 2.90909 240.511 2.88112 240.262 2.96504C241.01 2.96504 241.508 2.99301 242.256 2.99301C241.508 3.04895 240.013 2.99301 239.764 3.04895C240.511 3.1049 240.511 3.13287 239.265 3.1049C238.268 3.1049 237.022 3.07692 238.268 3.16084C239.016 3.16084 240.013 3.16084 240.76 3.21678ZM7.01083 1.48252C6.76163 1.48252 6.76164 1.48252 6.76164 1.51049C6.76164 1.48252 7.01083 1.48252 7.01083 1.48252ZM69.8093 1.9021C70.0585 1.93007 70.0584 1.9021 70.3076 1.9021C70.0584 1.9021 69.8093 1.9021 69.8093 1.9021ZM100.959 2.32168C100.71 2.32168 100.71 2.32168 100.959 2.32168ZM80.0264 2.01399C80.0264 1.98601 80.0264 1.98601 80.0264 2.01399ZM68.314 2.54545C68.0648 2.54545 68.0648 2.54545 67.8156 2.51748C67.8156 2.51748 67.5664 2.51748 67.5664 2.54545C67.8156 2.54545 68.0648 2.54545 68.314 2.54545ZM40.6528 2.18182C40.902 2.15385 40.6528 2.15385 40.6528 2.18182ZM81.0232 2.7972C81.2724 2.7972 81.2724 2.7972 81.0232 2.7972ZM76.0392 2.71329C75.79 2.71329 75.79 2.74126 75.2916 2.74126C75.5408 2.71329 75.79 2.71329 76.0392 2.71329ZM28.6912 2.18182C28.6912 2.20979 28.6912 2.20979 28.6912 2.18182ZM183.444 1.62238C183.444 1.62238 183.444 1.59441 183.195 1.62238C183.195 1.62238 183.195 1.62238 182.946 1.62238C183.195 1.62238 183.195 1.62238 183.444 1.62238ZM203.63 2.62937C203.63 2.6014 203.879 2.6014 203.879 2.57343C203.38 2.6014 203.38 2.6014 203.63 2.62937ZM145.317 3.02098C145.317 3.02098 145.068 3.02098 145.068 3.04895C145.317 3.04895 145.815 3.04895 146.064 3.04895C145.815 3.02098 145.566 3.02098 145.317 3.02098ZM161.016 1.45455C161.016 1.42657 161.016 1.42657 161.016 1.45455C160.767 1.42657 161.016 1.42657 161.016 1.45455ZM198.895 1.84615C199.144 1.84615 199.144 1.84615 198.895 1.84615C199.144 1.81818 199.393 1.81818 199.393 1.79021C199.144 1.79021 198.895 1.79021 198.646 1.79021C198.895 1.81818 198.895 1.81818 198.895 1.84615ZM196.154 1.37063C195.904 1.3986 195.904 1.3986 196.154 1.37063ZM124.135 3.41259C124.135 3.44056 124.135 3.44056 123.886 3.46853C124.135 3.46853 124.384 3.46853 124.633 3.46853C124.384 3.44056 124.384 3.44056 124.135 3.41259ZM174.972 0.867133C175.221 0.867133 175.221 0.867133 175.47 0.867133C175.47 0.867133 175.221 0.867133 174.972 0.867133ZM101.956 0.531469C101.707 0.531469 101.707 0.531469 101.956 0.531469ZM236.026 3.58042C237.022 3.52448 237.77 3.55245 238.767 3.58042C238.019 3.58042 237.022 3.58042 236.026 3.58042ZM133.355 0.335664C133.604 0.335664 133.854 0.335664 134.103 0.363636C133.604 0.335664 133.355 0.335664 133.355 0.335664Z"
                        fill="url(#paint0_linear_94_29)"
                      ></path>
                      {/* <defs>
                        <linearGradient
                          id="paint0_linear_74_17647"
                          x1="206.212"
                          y1="4.37008e-06"
                          x2="29.5265"
                          y2="102.578"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EF5C92"></stop>
                          <stop offset="0.247843" stopColor="#A85CC5"></stop>
                          <stop offset="1" stopColor="#6698FB"></stop>
                        </linearGradient>
                      </defs> */}
                    </svg>
                  </span>
                </span>
              </h3>
            </div>
          </div>

          {/* <div className="col-xl-5 col-lg-5 col-md-6 ">
            <div className="tp-service__btn text-end">
              <a className="tp-main-btn" href="contact.html">
                Let’s talk — Send a message
                <i>
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="" fill="url(#paint0_linear_82_98)"></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_82_98"
                        x1="0"
                        y1="8.47848"
                        x2="18"
                        y2="8.47848"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#EE0979"></stop>
                        <stop offset="1" stopColor="#FF6A00"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </i>
              </a>
            </div>
          </div> */}
          {/* --- */}
          {/* -------- */}
          <div className="col-xl-12 my-5">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-catagori-1">
                <div className="tp-catagori__border">
                  <div className="tp-catagori__item p-relative d-flex align-items-center">
                    <div className="tp-catagori__item-text">
                      <span>80+ item</span>
                    </div>
                    <div className="tp-catagori__thumb">
                      <img
                        src="https://template.wphix.com/printx-prv/printx/assets/img/catagori/icon-1-1.png"
                        alt=""
                      />
                      <div className="tp-catagori__shape">
                        <img
                          src="https://template.wphix.com/printx-prv/printx/assets/img/catagori/icon-shape-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tp-catagori__text">
                      <h5 className="tp-catagori__title">
                        <a href="#">Business Cards Design</a>
                      </h5>
                      <p>
                        Our online tools make the process as simple and clear as
                        possible, and
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* -------- */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-catagori-2">
                <div className="tp-catagori__border">
                  <div className="tp-catagori__item p-relative d-flex align-items-center">
                    <div className="tp-catagori__item-text">
                      <span>80+ item</span>
                    </div>
                    <div className="tp-catagori__thumb">
                      <img
                        src="https://template.wphix.com/printx-prv/printx/assets/img/catagori/icon-1-2.png"
                        alt=""
                      />
                      <div className="tp-catagori__shape">
                        <img
                          src="https://template.wphix.com/printx-prv/printx/assets/img/catagori/icon-shape-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tp-catagori__text">
                      <h5 className="tp-catagori__title">
                        <a href="#">Business Cards Design</a>
                      </h5>
                      <p>
                        Our online tools make the process as simple and clear as
                        possible, and
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* -------- */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-catagori-3">
                <div className="tp-catagori__border">
                  <div className="tp-catagori__item p-relative d-flex align-items-center">
                    <div className="tp-catagori__item-text">
                      <span>80+ item</span>
                    </div>
                    <div className="tp-catagori__thumb">
                      <img
                        src="https://template.wphix.com/printx-prv/printx/assets/img/catagori/icon-1-3.png"
                        alt=""
                      />
                      <div className="tp-catagori__shape">
                        <img
                          src="https://template.wphix.com/printx-prv/printx/assets/img/catagori/icon-shape-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tp-catagori__text">
                      <h5 className="tp-catagori__title">
                        <a href="#">Business Cards Design</a>
                      </h5>
                      <p>
                        Our online tools make the process as simple and clear as
                        possible, and
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* -------- */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-catagori-4">
                <div className="tp-catagori__border">
                  <div className="tp-catagori__item p-relative d-flex align-items-center">
                    <div className="tp-catagori__item-text">
                      <span>80+ item</span>
                    </div>
                    <div className="tp-catagori__thumb">
                      <img
                        src="https://template.wphix.com/printx-prv/printx/assets/img/catagori/icon-1-4.png"
                        alt=""
                      />
                      <div className="tp-catagori__shape">
                        <img
                          src="https://template.wphix.com/printx-prv/printx/assets/img/catagori/icon-shape-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tp-catagori__text">
                      <h5 className="tp-catagori__title">
                        <a href="#">Business Cards Design</a>
                      </h5>
                      <p>
                        Our online tools make the process as simple and clear as
                        possible, and
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* -------- */}
            </div>
          </div>

          <div className="tp-catagori__button text-center my-5">
            <a className="tp-btn-gradiant" href="#">
              Let’s talk — Send a message <PiHandsClappingBold />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PrintCategories;
