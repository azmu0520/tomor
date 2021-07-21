import React from "react";
import { Button } from "@material-ui/core";
import "./Button.css";
const CustomButton = ({ text, icon }) => {
  return (
    <Button
      className="cutom-btn"
      endIcon={icon ? <div className="icon-container">{icon}</div> : null}
    >
      <span className="btn-text">{text}</span>
    </Button>
  );
};

export default CustomButton;
