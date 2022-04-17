import React from "react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const SingleService = ({ service }) => {
  const { quality, price, img ,offer1,offer2,offer3,offer4,offer5 } = service;
  return (
    <div
      className="col-12 col-md-3 text-center shadow-lg py-3 my-3 px-3"
      style={{ borderRadius:'5px' }}
    >
      <img src={img} className="img-fluid rounded" alt="" />
      <h5 className="my-2">{quality}</h5>
      <p className="text-start px-3 m-1"><IoIosCheckmarkCircleOutline className="me-1" />{offer1}</p>
      <p className="text-start px-3 m-1"><IoIosCheckmarkCircleOutline className="me-1" />{offer2}</p>
      <p className="text-start px-3 m-1"><IoIosCheckmarkCircleOutline className="me-1" />{offer3}</p>
      <p className="text-start px-3 m-1"><IoIosCheckmarkCircleOutline className="me-1" />{offer4}</p>
      <p className="text-start px-3 m-1"><IoIosCheckmarkCircleOutline className="me-1" />{offer5}</p>
      <h5 className="my-2">For:{price}</h5>
      <Link to={'/checkout'}>
        <button className="rounded-0 border border-dark  btn btn-transparent text-dark px-4 py-2 custom-btn fw-bold">
          CHECKOUT
        </button>
      </Link>
    </div>
  );
};

export default SingleService;
