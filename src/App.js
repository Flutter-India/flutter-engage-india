import React from "react";
import {
  CommunitiesSection,
  FooterSection,
  HeroSection,
  ScheduleSection,
} from "./sections";

export default function App() {
  return (
    <>
      <HeroSection />
      {/* <ScheduleSection />  */}
      <CommunitiesSection />
      <FooterSection />
    </>
  );
}
