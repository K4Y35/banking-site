import React from "react";
import "./HeroSection.css";
import "./RequestInviteButton";
import RequestInviteButton from "./RequestInviteButton";
import heroImage from "../images/image-mockups.png";
import heroImageBg from "../images/bg-intro-desktop.svg";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Next generation <br /> degital banking
        </h1>
        <p>
          Take your financial life online. Your Easybank account <br />
          will be a one-stop-shop for spending, saving, <br />
          budgeting, investing, and much more.
        </p>

        <RequestInviteButton />
      </div>

      <div className="hero-image">
        <img className="heroMainImage" src={heroImage} alt="HeroImage" />
      </div>
    </div>
  );
}

export default HeroSection;
