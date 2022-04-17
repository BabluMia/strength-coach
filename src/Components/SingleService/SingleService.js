import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { quality, price, desc, img } = service;
  return (
    <div
      className="col-12 col-md-3 text-center shadow py-3 px-2"
      style={{ border: "1px solid black",borderRadius:'5px' }}
    >
      <img src={img} className="img-fluid rounded" alt="" />
      <h5 className="my-2">{quality}</h5>
      <p className="text-start px-3">{desc}</p>
      <h5>For:{price}</h5>
      <Link to={'/contact'}>
        <button className="rounded-0 border border-dark  btn btn-transparent text-dark px-4 py-2 custom-btn fw-bold">
          CHECKOUT
        </button>
      </Link>
    </div>
  );
};

export default SingleService;
