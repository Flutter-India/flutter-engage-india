import React from "react";

import { ScheduleItem } from "./components";
// Styles
import "./style.scss";

export default function ScheduleSection() {
  return (
    <>
      <div className="schedule__wrapper">
        <div className="schedule__title">
          <div className="schedule__header">Event Schedule</div>
          <div className="schedule__subheader">
            We've got some amazing things lined up for you
          </div>
        </div>
        {/* <div className="schedule__image">
          <img src={ScheduleImage} alt="Flutter Engage India Schedule" />
        </div> */}
        <div className="schedule__main">
          <ScheduleItem
            time="8:30"
            title="Flutter Engage Recap"
            // speaker="Ayush, Sanni, Maliha, Himanshu"
            description="A quick recap & insights on the key announcements made at Flutter
            Engage event on March 3rd."
          />
          <ScheduleItem
            time="9:00"
            title="Why Flutter in 2021?"
            speaker="Pawan Kumar"
            description="Some key insights and opinions on the capabilities of flutter and how to decide whether to pick flutter for your project or not."
          />
          <ScheduleItem
            time="9:30"
            title="QnA with Filip"
            speaker="Filip Hráček"
            description="An expert from the Flutter Team will be answering your questions live on chat. You can also use #AskFlutterIndia on Twitter to ask your questions."
          />
        </div>
      </div>
    </>
  );
}
