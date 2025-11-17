import React from "react";
import { Container } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#000035", color: "white", padding: "30px 0" }}
    >
      <Container className="text-center">
        <h5>College Event Management System</h5>
        <p>&copy; 2025 All Rights Reserved</p>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="#" style={{ color: "white", fontSize: "20px" }}>
            <FaInstagram />
          </a>
          <a href="#" style={{ color: "white", fontSize: "20px" }}>
            <FaLinkedin />
          </a>
          <a
            href="mailto:collegeevents@gmail.com"
            style={{ color: "white", fontSize: "20px" }}
          >
            <FaEnvelope />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
