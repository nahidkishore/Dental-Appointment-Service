import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact my-5 py-5">
      <div className="container text-center text-white mb-5">
        <h3 className="text-info text-uppercase">Contact Us</h3>
        <h1>Always Connect With Us</h1>
      </div>
      <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
               </div>
    </section>
  );
};

export default Contact;
