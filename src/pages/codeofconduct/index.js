import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { BottomSheet } from "material-ui-bottom-sheet";

// Styles
import "./style.scss";

export default function CodeOfConductPage({ isOpen, setIsOpen }) {
  return (
    <div className="code__of__conduct">
      <MuiThemeProvider>
        <BottomSheet
          onRequestClose={() => setIsOpen(false)}
          open={isOpen}
          style={{ maxHeight: "none" }}
          contentStyle={{ maxHeight: "none" }}
          bodyStyle={{ maxHeight: "none" }}
        >
          <div className="close__icon">
            <IconButton aria-label="close" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="code__of__conduct__content">
            <h2>Code Of Conduct</h2>
          </div>
        </BottomSheet>
      </MuiThemeProvider>
    </div>
  );
}
