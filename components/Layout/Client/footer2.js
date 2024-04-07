/* eslint-disable react/no-unescaped-entities */
import {
  Facebook,
  Instagram,
  PinterestAlt,
  Twitter,
  Youtube,
} from "@styled-icons/boxicons-logos";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import ImageLoader from "~/components/Image";
import classes from "./footer.module.css";
import Newsletter from "./newsletter";
import { Headset, ShieldCheck, Truck } from "@styled-icons/bootstrap";
import { useTranslation } from "react-i18next";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { MdPhoneForwarded } from "react-icons/md";

const Footer = (props) => {
  // Selecting settings from global state
  // const settings = useSelector((state) => state.settings);
  const { t } = useTranslation();
  const footer_link = {
    company: [
      {
        name: t("about_us"),
        link: "/about",
      },
    ],
    shop: [
      {
        name: t("faq"),
        link: "/faq",
      },
      {
        name: t("privacy_policy"),
        link: "/privacy",
      },
      {
        name: t("terms_and_conditions"),
        link: "/terms",
      },
      {
        name: t("return_policy"),
        link: "/return",
      },
    ],
    account: [
      {
        name: t("signin"),
        link: "/signin",
      },
      {
        name: t("profile"),
        link: "/profile",
      },
      {
        name: t("track_order"),
        link: "/order-track",
      },
    ],
  };

  if (props.visibility)
    return (
      <>
        <footer className={classes.footer_container}>
          <div className="custom_container">
            <div className="row m-0">
              <div className="col-md-4 px-0 py-4">
                <div className={classes.icon_container}>
                  <ShieldCheck className={classes.icon} />
                </div>
                <div className={classes.content}>
                  <h6>MONEY BACK GUARANTEE</h6>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
              <div className="col-md-4 px-0 py-4">
                <div className={classes.icon_container}>
                  <Headset className={classes.icon} />
                </div>
                <div className={classes.content}>
                  <h6>24/7 CUSTOMER SUPPORT</h6>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
              <div className="col-md-4 px-0 py-4">
                <div className={classes.icon_container}>
                  <Truck className={classes.icon} />
                </div>
                <div className={classes.content}>
                  <h6>FAST AND LOW COST DELIVERY</h6>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <hr className="mx-0" />
            {/* ----- */}
            <Newsletter />
            {/* ----- */}
            <div className="row">
              <div className="col-md-3 px-3 py-2">
                <Link href="/">
                  <div className={classes.logo}>
                    <ImageLoader
                      src={
                        "https://microrepairs.vercel.app/_next/image?url=https%3A%2F%2Fmicrorepairs.s3.us-east-1.amazonaws.com%2F1571756trsrhyg9691997mtztpmtDev-Mantra.png&w=256&q=75"
                      }
                      width={145}
                      height={45}
                      alt={"Image"}
                    />
                  </div>
                </Link>
                <div className={classes.address}>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec lacinia molestie ex, non consectetur mi dapibus a. Ut
                    felis neque, efficitur quis lectus nec, auctor molestie
                    nisi. Mauris fermentum metus a massa egestas, in posuere
                    ligula cursus.
                  </h1>
                </div>
              </div>
              {/* ----- */}
              <div className="col-md-3 px-3 py-2">
                <h3 className={classes.footer_heading}>SERVICES</h3>
                <ul className={classes.list}>
                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/">Printers and Scanners Setup</Link>
                    </div>
                  </li>

                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/tv-connect-and-setup">
                        TV Connect and Setup
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/cell-phone-repair">Cell Phone Repair</Link>
                    </div>
                  </li>

                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/home-wifi-Setup">Home WI-FI Setup</Link>
                    </div>
                  </li>

                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/data-recovery">Data Recovery</Link>
                    </div>
                  </li>

                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/virus-and-spyware-removal">
                        Virus and Spyware Removal
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              {/* ----- */}
              <div className="col-md-3 px-3 py-2">
                <h3 className={classes.footer_heading}>{t("quick_links")}</h3>
                <ul className={classes.list}>
                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/about">About</Link>
                    </div>
                  </li>
                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/faq">Faq</Link>
                    </div>
                  </li>

                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/terms">Terms & Conditions</Link>
                    </div>
                  </li>
                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/privacy">Privacy Policy</Link>
                    </div>
                  </li>
                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/">Cookie Policy</Link>
                    </div>
                  </li>
                  <li>
                    <div className={classes.thumb_content}>
                      <RiArrowRightDoubleFill
                        style={{
                          position: "relative",
                          bottom: "2px",
                          marginRight: "3px",
                        }}
                      />
                      <Link href="/return">Return Policy</Link>
                    </div>
                  </li>
                </ul>
              </div>
              {/* ----- */}

              <div className="col-md-3 px-3 py-2">
                <h3 className={classes.footer_heading}>{t("contact_info")}</h3>

                <div className={classes.address}>
                  <p className="text-dark my-2">
                    <FaHome
                      style={{
                        color: "blue",
                        marginRight: "5px",
                      }}
                    />
                    1605 Bottom Lane, Tonawanda,
                    <br /> New York 14151
                  </p>
                  <p className="text-dark my-2">
                    <FaEnvelope
                      style={{
                        color: "blue",
                        marginRight: "5px",
                      }}
                    />
                    info@nextlife.com
                  </p>
                  <p className="text-dark my-2">
                    <MdPhoneForwarded
                      style={{
                        color: "blue",
                        marginRight: "5px",
                      }}
                    />
                    +1 (000) 000-0000
                  </p>
                </div>
              </div>
              {/* ----- */}
            </div>
            <hr />
            <div className="row m-0">
              <div className="col-md-4 p-2">
                <p className={classes.copyright}>
                  Copyright © MicroRepairs 2024. All rights reserved.
                </p>
              </div>
              <div className="col-md-5 p-2">
                <div className={classes.gateway}>
                  <ImageLoader
                    src={
                      "https://images.ctfassets.net/lzny33ho1g45/stripe-vs-paypal-p-img/de3d6286a0761a01b077b5d9578936b3/PayPal_vs_Stripe.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                    }
                    alt={"Payment-Image"}
                    width={565}
                    height={37}
                    style={{
                      width: "auto",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-3 p-2">
                <div className={classes.social}>
                  <a
                    href={"#"}
                    className={classes.social_icon}
                    aria-label="Facebook"
                  >
                    <Facebook width={30} height={30} />
                  </a>
                  <a
                    href={"#"}
                    className={classes.social_icon}
                    aria-label="Instagram"
                  >
                    <Instagram width={30} height={30} />
                  </a>
                  <a
                    href={"#"}
                    className={classes.social_icon}
                    aria-label="Twitter"
                  >
                    <Twitter width={30} height={30} />
                  </a>
                  <a
                    href={"#"}
                    className={classes.social_icon}
                    aria-label="Youtube"
                  >
                    <Youtube width={30} height={30} />
                  </a>
                  <a
                    href={"#"}
                    className={classes.social_icon}
                    aria-label="Pinterest"
                  >
                    <PinterestAlt width={30} height={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );

  return null;
};

export default React.memo(Footer);
