import React from "react";

import "./style.scss";

export default function CommunityContainer({ logo, title, twitter }) {
  return (
    <>
      <div className="community__container">
        <a href={twitter} target="_blank" rel="noopener">
          <div className="community__image" id={title}>
            <img src={logo} alt={title} />
          </div>
          <div className="community__name">{`Flutter ${title}`}</div>
        </a>
      </div>
    </>
  );
}
