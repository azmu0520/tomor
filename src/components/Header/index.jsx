import React from "react";
import {
  Button,
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {
  Telegram,
  Facebook,
  Twitter,
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  LinkedIn,
  GitHub,
} from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import resumeData from "../../utils/resumeData";
import { Link, NavLink, withRouter } from "react-router-dom";
import "./style.css";
import CustomButton from "../Button";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="home-header">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header-left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header-link-active" : "header-link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header-link-active" : "header-link"
            }
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/blog"
            className={
              pathName == "/blog" ? "header-link-active" : "header-link"
            }
          >
            Blog
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName == "/contact" ? "header-link-active" : "header-link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>
        <div className="header-right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
