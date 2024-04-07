import React, { Fragment } from "react";

const ServicesPointsCards = ({ title, description, icon }) => {
  return (
    <Fragment>
      <div className="eits-card col-md-4">
        <div className="eits-card-content">
          <div className="eits-icon-background">
            <svg className="eits-wave" viewBox="0 0 2000 100">
              <path d="M0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100 V 0 H 0 Z"></path>
            </svg>
            <span style={{ fontSize: "70px" }}>{icon}</span>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesPointsCards;
