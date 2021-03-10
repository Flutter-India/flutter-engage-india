import React, { useState, useEffect } from "react";

import { HomePage, CodeOfConductPage } from "./pages";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log("StateChanged", modalOpen);

    if (modalOpen) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "scroll";
    }
  }, [modalOpen]);

  return (
    <>
      <HomePage isOpen={modalOpen} setIsOpen={setModalOpen} />
      <CodeOfConductPage isOpen={modalOpen} setIsOpen={setModalOpen} />
    </>
  );
}
