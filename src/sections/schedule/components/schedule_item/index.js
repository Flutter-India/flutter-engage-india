import React from "react";

import "./style.scss";

export default function ScheduleItem({
  title,
  time,
  speaker = null,
  description,
}) {
  return (
    <>
      <div className="schedule__item">
        <div className="schedule__time">
          {time}
          <span>PM</span>
        </div>
        <div className="schedule__item__content">
          <div className="schedule__item__title">
            {title}{" "}
            <span>
              {speaker !== null && "-"} {speaker}
            </span>
          </div>

          <div className="schedule__item__description">{description}</div>

          {/* <div className="schedule__speaker">
            <div className="speaker__name">{speaker}</div>
          </div> */}
        </div>
      </div>
    </>
  );
}
