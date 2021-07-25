import { Typography } from "@material-ui/core";
import React from "react";
import "./style.css";
import resumeData from "../../utils/resumeData";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer-name">{resumeData.name}</Typography>
      </div>
      <div className="footer-left">
        <Typography className="footer-auther">
          Designed and Developed by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={resumeData.socials.Github.link}
          >
            Azizbek Mukhtorov
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
