import React from "react";
import "./Footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center footer mt-5 pt-2  bottom-0">
      <div className="row w-75 mx-auto mb-2">
        <div className="col-12 col-md-6">
          <h5 className="">Strength Coach</h5>
          <p>Desgin By Bablu || React </p>
        </div>
        <div className="col-12 col-md-6 ">
          <h5>If You Want , Go.....</h5>
          <Link className="custom-icon" to="https://github.com/BabluMia">
            <GrFacebookOption />
          </Link>
          <Link className="custom-icon" to="https://github.com/BabluMia">
            <BsTwitter />
          </Link>
          <Link className="custom-icon" to="https://github.com/BabluMia">
            <BsLinkedin />
          </Link>
          <Link className="custom-icon" to="https://github.com/BabluMia">
            <BsGithub />
          </Link>

          <Link className="custom-icon" to="https://github.com/BabluMia">
            <IoLogoWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
