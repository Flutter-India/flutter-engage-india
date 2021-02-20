import React from "react";

import "./style.scss";

export default function CommunityContainer({ logo, title }) {
  return (
    <>
      <div className="community__container">
        <div className="community__image" id={title}>
          <img src={logo} alt={title} />
        </div>
        <div className="community__name">{`Flutter ${title}`}</div>
      </div>
    </>
  );
}
