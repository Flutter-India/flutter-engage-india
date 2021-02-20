import React from "react";
import { HeroImage } from "../../assets";

// Styles
import "./style.scss";

export default function HeroSection() {
  return (
    <>
      <div className="hero__wrapper">
        <div className="row">
          <div className="col-lg-6 hero__content">
            <div className="title__wrapper">
              <h1>
                Flutter Engage <span>India</span>
              </h1>
            </div>

            <div className="hero__description">
              <p>
                Join the Flutter community in India for this special online
                event! There will be opportunities to engage, innovate, and
                collaborate with the global community.
              </p>
            </div>

            <div className="hero__schedule">Saturday, 13 March, 2021</div>
            <button className="hero__call__to__action">Register</button>
          </div>
          <div className="col-lg-6 hero__image">
            <img src={HeroImage} alt="Flutter Engage India Extended" />
          </div>
        </div>
      </div>
    </>
  );
}
