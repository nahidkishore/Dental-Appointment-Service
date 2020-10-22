import React from "react";
import "./Testimonials.css";
const TestimonialCard = (props) => {
  const { quote, name, from, img } = props.testimonial;
  return (
    <div className="col-md-4 col-sm-12 mt-5">
      <div className="card shadow ">
        <div className="card-body ">
          <p className="card-text text-center">{quote}</p>
        </div>
        <div className="card-footer d-flex align-items-center">
          <img src={img} alt="" className="img-fluid mx-3" width="60" />
          <div>
            <h6 className="text-info">{name}</h6>
            <p className="m-0">{from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
