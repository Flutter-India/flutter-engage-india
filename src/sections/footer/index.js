import React from "react";

import { GoogleDevs, FlutterCommunity } from "../../assets";

// Styles
import "./style.scss";

export default function FooterSection({ setIsOpen }) {
  return (
    <>
      <div className="footer__wrapper">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="powered__by">Powered by</div>
            <div className="powered__logos">
              <div className="google__devs">
                <img src={GoogleDevs} alt="Google Developers" />
              </div>
              <div className="flutter__community">
                <img src={FlutterCommunity} alt="Flutter Community" />
              </div>
            </div>
            <div className="footer__disclaimer">
              Flutter and the related logo are trademarks of Google LLC. Flutter
              India is not affilated with or otherwise sponsored by Google LLC.
            </div>
          </div>
          <div className="col-lg-2 ">
            <div className="row">
              <a
                target="_blank"
                rel="noopener"
                className="footer__icon"
                href="https://twitter.com/indiaflutter?lang=en"
              >
                <i className="fab fa-twitter" />
              </a>

              <a
                target="_blank"
                rel="noopener"
                className="footer__icon"
                href="https://www.linkedin.com/company/flutterindia"
              >
                <i className="fab fa-linkedin" />
              </a>

              <a
                target="_blank"
                rel="noopener"
                className="footer__icon"
                href="https://www.facebook.com/IndiaFlutter/"
              >
                <i className="fab fa-facebook" />
              </a>

              <a
                target="_blank"
                rel="noopener"
                className="footer__icon"
                href="https://www.youtube.com/flutterindia"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
            <div
              id="codeofconduct__footer"
              className="row"
              onClick={() => setIsOpen(true)}
            >
              Code Of Conduct
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
