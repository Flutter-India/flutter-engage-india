import React, { useEffect, useRef } from "react";
import { HeroImage, FlareAnimation } from "../../assets";

import FlareComponent from "flare-react";

import swal from "sweetalert";

// Styles
import "./style.scss";

export default function HeroSection() {
  const riveAnimation = useRef();

  useEffect(() => {
    /* eslint-disable no-undef */
    const animation = new RiveAnimation({
      src: FlareAnimation, // host your Rive file and add the url to src
      canvas: riveAnimation.current,
      autoplay: true,
      loop: true,

      alignment: new CanvasAlignment({
        fit: "contain",
        alignment: "center",
      }),
    });

    animation.on("stop", (e) => {
      animation.play();
    });
  }, []);

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
            {/* <canvas
              style={{ height: "450px" }}
              className="rive__animation"
              ref={riveAnimation}
            ></canvas> */}

            <img src={HeroImage} alt="Flutter Engage India Extended" />
          </div>
        </div>
      </div>
    </>
  );
}
