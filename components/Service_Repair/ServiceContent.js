import { GiAutoRepair } from "react-icons/gi";
import Link from "next/link";

const ServiceContent = () => {
  return (
    <div className="service-content container my-5">
      <div className="bg-charcoal text-white rounded-3 block">
        <div className="row">
          <div className="col-lg-3 d-lg-block d-none mb-md-0 mb-3">
            <div className="block-lg">
              <h2 className="h5 d-flex align-items-center icon-group">
                <GiAutoRepair
                  style={{ marginRight: "5px", marginBottom: "5px" }}
                />
                <span className="text-white h5">Service and Repair</span>
              </h2>
              <p className="text-light">
                Our OEM and A+ Certified Technicians can help with any computer
                repair or service need. Repairs are completed in each store,
                giving you peace of mind and a quick turnaround. Walk-ins are
                welcome at any of our nationwide locations or schedule a service
                appointment (below).
              </p>
              <Link href="/">
                <p className="btn btn-primary w-100 mb-3">
                  Schedule Free Consultation
                </p>
              </Link>
              <Link href="/">
                <p className="btn btn-outline-primary w-100">
                  Check Status of a repair
                </p>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <p>
              <strong className="h4 text-white">Free Consultation</strong>
            </p>
            <p className="text-light">
              Speak with an expert technician to gain more insight into your
              computer issue and potential
            </p>
            <Link href="/">
              <p className="text-light-blue">Learn more</p>
            </Link>
            <hr className="my-3" />
            <p>
              <strong className="h4 text-white">
                Computer Hardware Installation
              </strong>
            </p>
            <p className="text-light">
              If your computer needs more storage, memory, or the latest
              graphics card check out our Computer Hardware Installation
              services
            </p>
            <Link href="/">
              <p className="text-light-blue">Learn more</p>
            </Link>
            <hr className="my-3" />
            <p>
              <strong className="h4 text-white">
                Laptop Battery Installation
              </strong>
            </p>
            <p className="text-light">
              Our expert A+ and OEM certified service technicians can install an
              internal laptop battery for you same day.
            </p>
            <Link href="/">
              <p className="text-light-blue">Learn more</p>
            </Link>
          </div>
          <div className="col-lg-5">
            <p className="strong large text-white">Custom PC Build Services</p>
            <div className="row">
              <div className="col">
                <img
                  src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/Homepage-1385908726.jpg"
                  className="img-fluid rounded-3 service-content-img"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-white h4">SAME-DAY BUILDS</p>
                <p className="text-light">
                  Looking for an air or AIO cooled custom PC? Order 4 hours
                  before close and our techs can build it for you same day!
                </p>
              </div>
              <div className="col">
                <p className="text-white h4">ADVANCED BUILDS</p>
                <p className="text-light">
                  The sky is the limit with our custom water cooled PC builds.
                  If you can dream it, our techs can build it.
                </p>
              </div>
            </div>
            <div className="row LearnMore">
              <div className="col LearnMore">
                <Link href="/">
                  <p className="btn btn-primary btn-sm">
                    Learn More about Advanced Builds
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
