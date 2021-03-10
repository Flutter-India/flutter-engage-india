import React from "react";

import {
  CommunitiesSection,
  FooterSection,
  HeroSection,
  ScheduleSection,
} from "../../sections";

export default function HomePage({ isOpen, setIsOpen }) {
  return (
    <>
      <HeroSection />
      <ScheduleSection />
      <CommunitiesSection />
      <FooterSection isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
