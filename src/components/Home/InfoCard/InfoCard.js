import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InfoCard = (props) => {
  const { title, description, icon } = props.info;
  return (
    <div className="col-md-4" >
    
    <div>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </div>
      <div>
        <h6>{title}</h6>
        <small>{description}</small>
     
    </div>
    </div>
  );
};

export default InfoCard;
