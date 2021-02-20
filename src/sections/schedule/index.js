import React from "react";

import { ScheduleImage } from "../../assets";
// Styles
import "./style.scss";

export default function ScheduleSection() {
  return (
    <>
      <div className="schedule__wrapper">
        <div className="schedule__title">
          <div className="schedule__header">Event Schedule</div>
          <div className="schedule__subheader">To be announced soon...</div>
        </div>
        <div className="schedule__image">
          <img src={ScheduleImage} alt="Flutter Engage India Schedule" />
        </div>
      </div>
    </>
  );
}
