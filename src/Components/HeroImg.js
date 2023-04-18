import "./HeroimgStyles.css";

import React from "react";

import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";

const heroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p> let start </p>
        <h1>Web Developer</h1>
      </div>
      <Link to="/Project" className="btn">
        projects
      </Link>

      <Link to="/Contact" className="btn btn-light">
        Contact
      </Link>
    </div>
  );
};

export default heroImg;
