import React from "react";
import { HeroImage } from "../../assets";

import swal from "sweetalert";

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
                Join us to uncover innovative trends with flutter experts.
                <br />
                <br />
                This event is extended one from the official event of Flutter
                Engage happening on 3rd March 2021. Please check{" "}
                <a
                  href="https://events.flutter.dev/"
                  target="_blank"
                  rel="noopener "
                >
                  here
                </a>{" "}
                for more info about it, and sign up for updates!
              </p>
            </div>

            <div className="hero__schedule">Saturday, 13 March, 2021</div>
            <div className="actions__wrapper">
              <button
                className="hero__call__to__action"
                onClick={() =>
                  swal("Stay Tuned!", "Registrations Opening Soon...", "info")
                }
              >
                Coming Soon
              </button>

              <a
                href="https://discord.gg/n5kYvmM"
                target="_blank"
                rel="noopener"
              >
                <button className="join__discord__btn">Join Our Discord</button>
              </a>
            </div>
          </div>

          <div className="col-lg-6 hero__image">
            <img src={HeroImage} alt="Flutter Engage India Extended" />
          </div>
        </div>
      </div>
    </>
  );
}
