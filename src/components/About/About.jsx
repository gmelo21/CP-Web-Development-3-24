import "./about.css";
import Accordion from "react-bootstrap/Accordion";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function About() {
  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item className="accordion-item" eventKey="0">
        <Accordion.Header className="accordion-name">
          Our History
        </Accordion.Header>
        <Accordion.Body className="accordion-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        <Accordion.Body className="accordion-description">
          Made by: Guilherme Melo & Matheus Gushi.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        id="accordion-end"
        className="accordion-item"
        eventKey="1"
      >
        <Accordion.Header className="accordion-name">
          Our Social Media
        </Accordion.Header>
        <Accordion.Body className="accordion-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        <Accordion.Body className="accordion-description">
          <>
            <IoLogoInstagram className="social-icon" />
            <FaFacebookSquare className="social-icon" />
            <FaLinkedin className="social-icon" />
            <HiOutlineMail className="social-icon" />
          </>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default About;
