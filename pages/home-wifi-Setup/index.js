import React, { Fragment } from "react";
// import OurBenefits from "../components/Common/OurBenefits";
// import OfferingServices from "../components/Common/OfferingServices";
// import OurProcess from "../components/Common/OurProcess";
// import FaqUsGadget from "../components/Common/FaqUsGadget";
// import SliderText from "../components/Common/SliderText";
// import ServicesPointsCards from "../components/Common/ServicesPointsCards";
// import { FaUsers } from "react-icons/fa";
// import {
//   MdConnectWithoutContact,
//   MdInstallDesktop,
//   MdOutlineSettingsAccessibility,
// } from "react-icons/md";
// import { BiSolidCustomize } from "react-icons/bi";
// import { BsHddNetworkFill } from "react-icons/bs";
import CommonServiceBanner from "~/components/ServiceCategory/CommonServiceBanner";

const HomeWIFISetup = () => {
  return (
    <Fragment>
      <CommonServiceBanner
        title={"Home Wi-Fi Setup"}
        list1={`Welcome to the world of seamless connectivity at home! Our Home Wi-Fi
        Setup service is designed to revolutionize your internet experience,
        ensuring fast, reliable, and hassle-free connectivity for all your
        devices.`}
        list2={`Transform your home into a hub of connectivity with our Home
        Wi-Fi Setup service. Enjoy uninterrupted streaming, seamless browsing, and
        smooth connectivity across all your devices. Say hello to a world where
        connectivity is effortless and reliable!`}
        bannerPrice={"79.99"}
        bannerImg={
          "https://images.business.com/app/uploads/2022/03/23020841/business-wifi-best-practices-3.png"
        }
      />
      {/* <SliderText /> */}
      {/* <OfferingServices /> */}

      {/* <div className="container services-container">
        <div className="text-center service-offer-content">
          <h2 className="title">Every Tv Connect and Setup plan includes</h2>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="eits-card-container">
              <ServicesPointsCards
                title="Hassle-Free Installation"
                description={`Say goodbye to the stress of setting up your new TV. 
                Our expert technicians will handle everything from unboxing to mounting, 
                ensuring a secure and optimal placement that suits your space.`}
                icon={<MdInstallDesktop />}
              />

              <ServicesPointsCards
                title="Seamless Connectivity"
                description={`Connect all your devices effortlessly! Our technicians will synchronize
                 your TV with gaming consoles, streaming devices, sound systems, and more, ensuring 
                 a smooth and integrated experience.`}
                icon={<MdConnectWithoutContact />}
              />

              <ServicesPointsCards
                title="Customized Configuration"
                description={`Tailored to your preferences, we optimize your TV settings for the best 
                picture quality, sound performance, and accessibility features, providing a personalized 
                viewing experience.`}
                icon={<BiSolidCustomize />}
              />

              <ServicesPointsCards
                title="Network Integration"
                description={`Get connected to the internet hassle-free. 
                We'll configure your smart TV to your Wi-Fi network, 
                enabling access to online streaming services, apps,
                 and content without any glitches.`}
                icon={<BsHddNetworkFill />}
              />

              <ServicesPointsCards
                title="Comprehensive Demonstration"
                description={`Our experts will guide you through the 
                functionalities of your newly set-up TV, 
                ensuring you understand all its features and how to 
                maximize your entertainment experience.`}
                icon={<FaUsers />}
              />

              <ServicesPointsCards
                title="Post-Setup Support"
                description={`We don't just set up and leave! Our service includes post-setup assistance 
                and support, ensuring your satisfaction and addressing any queries or issues that may 
                arise after installation.`}
                icon={<MdOutlineSettingsAccessibility />}
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* <OurProcess />
      <FaqUsGadget />
      <OurBenefits /> */}
    </Fragment>
  );
};

export default HomeWIFISetup;
