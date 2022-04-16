import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="min-h my-5">
      <span className="text-white my-5">.</span>
      <h2 className="text-4xl text-center mt-5 pt-4 fw-bold  p-4">
        Contact us
      </h2>
      <div className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Your Name
          </label>
          <input
            type="Text"
            className="form-control"
            placeholder="Mr . Brayn"
          ></input>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className=" rounded-0 border border-dark my-4 btn btn-transparent text-dark px-4 py-2 me-4 custom-btn fw-bold">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Contact;
