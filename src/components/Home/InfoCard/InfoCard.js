import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

const InfoCard = (props) => {
  const { title, description, icon, background } = props.info;
  return (
    <div className="col-md-4 text-white info-card">
      <div
        className={`d-flex justify-content-center  info-container  info-${background}`}
      >
        <div className="mr-4">
          <FontAwesomeIcon className="font-icon" icon={icon}></FontAwesomeIcon>
        </div>
        <div>
          <h6>{title}</h6>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
