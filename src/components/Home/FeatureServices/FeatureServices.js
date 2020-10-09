import React from "react";
import feature from "../../../images/feature.png";
const FeatureServices = () => {
  return (
    <section className="feature pb-0 pb-md-5 my-5">
      <div className="container mb-5">
      <div className="row mb-5">
        <div className="col-md-5 mb-4 m-md-0">
          <img src={feature} alt="" className="img-fluid" />
        </div>
        <div className="col-md-7 align-self-center">
          <h1 className="mt-5 ">
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="text-secondary mt-5 mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            saepe eveniet temporibus. Dolore optio magnam quia asperiores
            similique voluptatem deleniti, perferendis dolorem dolores assumenda
            sequi atque accusantium facere rem temporibus?
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>

      </div>
    </section>
  );
};

export default FeatureServices;
