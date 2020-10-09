import React from "react";
import img1 from "../../../images/Ellipse 1.png";
import img2 from "../../../images/Ellipse 2.png";
import img3 from "../../../images/Ellipse 3.png";
import TestimonialCard from "./TestimonialCard";
import './Testimonials.css'
const testmonialsData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sapiente quisquam labore aliquam beatae eveniet incidunt, fugit iste maxime totam, necessitatibus a inventore quos sequi!",
    name: "Wilson Harry",
    from: "California",
    img: img1,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sapiente quisquam labore aliquam beatae eveniet incidunt, fugit iste maxime totam, necessitatibus a inventore quos sequi!",
    name: "Wilson Harry",
    from: "California",
    img: img2,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sapiente quisquam labore aliquam beatae eveniet incidunt, fugit iste maxime totam, necessitatibus a inventore quos sequi!",
    name: "Wilson Harry",
    from: "California",
    img: img3,
  },
];
const Testimonials = () => {
  return (
    <section className="testimonials mt-5 ">
      <div className="container">
        <div className="section-header">
        <h5 className="text-info text-uppercase">Testimonial</h5>
          <h2>Whats our Patients <br/> Says</h2>
        </div>
        <div className="card-deck mt-5">
        {
     testmonialsData.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial.name}></TestimonialCard>)
      }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
