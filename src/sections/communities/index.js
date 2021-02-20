import React from "react";
import { CommunityContainer } from "../../components";

import { communitiesData } from "../../helpers";
// Styles
import "./style.scss";

export default function CommunitiesSection() {
  return (
    <>
      <div className="communities__wrapper">
        <div className="communities__title">
          <div className="communities__header">Organized by</div>
          <div className="communities__subheader">
            a mega collaboration between ...
          </div>
        </div>

        <div className="communities__logos">
          {communitiesData.map((e, index) => {
            return (
              <CommunityContainer logo={e.logo} title={e.title} key={index} />
            );
          })}
        </div>
      </div>
    </>
  );
}
