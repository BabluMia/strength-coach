import "./Home.css";
import React from "react";
import AboutTrain from "../AboutTrain/AboutTrain";
import TrainersBelive from "../TrainersBleive/TrainersBelive";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      {/* banner section */}
      <div className="home d-flex justify-content-center align-items-center">
        <div className="banner text-center">
          <h1 className="my-4 text-white  fw-bolder">
            <strong>
              STRENGTH <span className="b-bottom">TRAINING</span> SIMPLIFIED
            </strong>
          </h1>
          <h2>PREMIUM PERSONAL TRAINING SERVICES IN THE GLASGOW AREA</h2>
          <div className="my-5">
            <button className="btn btn-transparent text-white px-4 py-2 me-4 custom-btn">
              START HERE
            </button>
            <button className="btn btn-white bg-white px-4 py-2 custom-btn">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
      {/* about mate */}
      <div className="container-fluid row " style={{ margin: "60px 0px" }}>
        <div className="col-12 text-center w-75 mx-auto">
          <h2 className="mt-3 mb-4">MATT ROBERTS PERSONAL TRAINING</h2>
          <h6>
            Matt Roberts is the original pioneer of the UK Personal Training
            industry. After opening Europe’s first exclusively Personal Training
            gym in
          </h6>
          <h6>
            1996 Matt has become the most recognised person in the industry. The
            roster of clients, companies and media that he has worked with
          </h6>
          <h6>
            have been transformative to the way Personal Training is publicly
            perceived and used today.
          </h6>
        </div>
      </div>
      {/* MATT ROBERTS */}
      <div className="container-fluid trainer">
        <div className="row container mx-0 mx-lg-4">
          <div className="col-12 col-lg-6">
            <h1 className="text-white mt-4">MATT ROBERTS</h1>
            <p className=" text-white mt-3">
            Great Trainers are great listeners, analysts and motivators who put their clients results first and foremost. Great Trainers recognise and adapt to the needs of the client and are flexible and creative enough to deal with any goal, barrier, aspiration and dream. We have delivered more than one million hours of personal training as a company. We know how to get results from everybody.”
            </p>
            <button className="btn bg-transparent px-3 py-2  text-white meet-btn" >MEET MAAT</button>
          </div>
        </div>
      </div>

      {/* about services */}
      <AboutTrain />
      {/* evelution */}
      <div className="container-fluid eveolution ">
        <div className="row  text-white cont">
          <h3 className=" text-end">MATT ROBERTS EVOLUTION</h3>
          <p className="text-end">
            We have integrated a raft of services into our offering at Matt
            Roberts Evolution Mayfair, in <br />
            order to ensure we test, assess, analyse and prescribe the perfect
            blend of training, <br />
            nutrition, physical therapy, mobility, pilates, medical modulation
            and intervention, in a <br />
            completely bespoke manner, like never before.
          </p>
        </div>
      </div>
      {/* belive section */}
      <TrainersBelive />
      {/* services section */}
      <Services />
    </>
  );
};

export default Home;
