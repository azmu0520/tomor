import React from "react";
import { Button } from "@material-ui/core";
import "./Button.css";
const CustomButton = ({ text, icon }) => {
  return (
    <Button
      variant="contained"
      className="custom-btn"
      endIcon={icon ? <div className="icon-container">{icon}</div> : null}
    >
      <span className="btn-text">{text}</span>
    </Button>
  );
};

export default CustomButton;
