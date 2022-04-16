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
      {/* about services */}
        <AboutTrain/>
      {/* belive section */}
      <TrainersBelive/>
      {/* services section */}
      <Services/>
    </>
  );
};

export default Home;
