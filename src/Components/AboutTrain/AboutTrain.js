import React from 'react';

const AboutTrain = () => {
    return (
        <div className="my-5">
        <h2 className="text-dark text-center my-5 fw-bold">
          PROFESSIONAL STRENGTH COACHING SERVICES
        </h2>
        <div className="row g-3 w-75 mx-auto services-about">
          <div className="col-12 col-md-6 pe-3">
            <p>
              How much have you spent trying to improve your health and fitness
              over the years only for the supplements to go in the bin, the home
              workout equipment to go in the cupboard or the gym memberships
              running unused? Have you ever calculated how much money has gone
              to waste to date? At Strength Coach Glasgow, we work on actually
              getting your return on investment, you are paying for the result
              and we’ll make sure we deliver.
            </p>
            <p className="my-3">
              ​Our training programmes are designed not only to help you learn
              correct exercise form, but also to help you improve your strength,
              lose weight if needed and create a quality of life you can enjoy.
              This way your confidence will soar, your body will feel and look
              amazing and there won't be anything you can't achieve with
              dedication and commitment..
            </p>
            <button className="rounded-0 border border-dark my-4 btn btn-transparent text-dark px-4 py-2 me-4 custom-btn fw-bold">
              READ MORE
            </button>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="https://www.strengthcoachglasgow.co.uk/uploads/1/2/3/3/123320581/professional-strength-coaching-services_orig.jpg"
              className="img-fluid rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default AboutTrain;