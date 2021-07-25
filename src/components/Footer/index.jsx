import { Typography } from "@material-ui/core";
import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer-name">Azizbek Mukhtorov</Typography>
      </div>
      <div className="footer-left">
        <Typography className="footer-auther">
          Designed and Developed by <a href="">Azizbek Mukhtorov</a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
