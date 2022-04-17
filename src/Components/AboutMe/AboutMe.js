import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      
      <div className="container-fluid about-bg">
      <h1 className="text-center mb-5">ABOUT SECTION</h1>
        <div className="row container mx-auto mt-2 mb-5">
          <div className="col-5 my-5 ">
            <img
              src="https://i.ibb.co/99DnPY8/IMG-20211217-093443-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="col-6 mt-5">
                <h4 className="mt-5">ABOUT ME</h4>
                <p className="my-3">
                I'm Bablu From Sylhet. I'm a student of Degree pass course. In 2022 IT is the most valuable sector in the world. I have lots of interest in this sector. That's why I started learning front-end development. I started with HTML in 2020 but I was distracted for many reasons many times. In 2021 I know about JS but I was a lot Scared about JS. In 2022 I learned the core concept of JS and right now I'm learning React one of the most frameworks in the world.
                </p>
                <h4 className="mt-5">ABOUT MY GOAL</h4>
                <p className="my-3">
                I'm very excited to do a new thing every time. Making websites for others is excite me. I love to design with programming. I like to solve problems and add functionality to a website. Front-end development is my hobby. I want to be a junior front-end/react developer in 2022 that's my goal. I'm Working on it. I love this work and I wanna achieve my goal with programming hero. I hope I will.
                </p>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
