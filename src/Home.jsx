import { Typography } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="homepage-section">
        <div className="homepage-bg"></div>
        <div className="homepage-content">
          <h1>Welcome to College Event Management System</h1>
          <p>
            Discover, manage, and participate in exciting college events — all
            in one place!
          </p>
          <Link to={"/events"}>
            <button>Explore Events</button>
          </Link>
        </div>
      </section>

      <section>
        <div>
          <Typography
            variant="h4"
            className="text-center fw-bold mt-5"
            style={{ color: "#000035" }}
          >
            Upcoming Events
          </Typography>
          <div
            className="d-flex justify-content-center gap-5 mt-5"
            style={{ marginBottom: "200px" }}
          >
            <Card style={{ width: "18rem", height: "22rem" }}>
              <Card.Img
                variant="top"
                src="https://siss.co.in/wp-content/uploads/2021/09/sol-banner-2.jpg"
              />
              <Card.Body style={{ backgroundColor: "#000035" }}>
                <Card.Title className="text-white">
                  Tech Innovators 2025
                </Card.Title>
                <Card.Text className="text-white">
                  November 24, 2025
                  <br />
                  Main Auditorium
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", height: "22rem" }}>
              <Card.Img
                variant="top"
                src="https://media.licdn.com/dms/image/v2/C5612AQHAHwW5KHZSCg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520122320389?e=2147483647&v=beta&t=05f1UWPH6-0DWjVn8imG6qPWaEr0ZFalVLIBbJnKW9w"
                style={{ height: "200px" }}
              />
              <Card.Body style={{ backgroundColor: "#000035" }}>
                <Card.Title className="text-white">
                  Cultural Fest 2025
                </Card.Title>
                <Card.Text className="text-white">
                  December 17-18, 2025
                  <br />
                  Open Ground
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", height: "22rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/hackathon-event-with-developers-brainstorming-coding-together_1314467-10942.jpg?semt=ais_hybrid&w=740&q=80"
                style={{ height: "200px" }}
              />
              <Card.Body style={{ backgroundColor: "#000035" }}>
                <Card.Title className="text-white">Hackathron</Card.Title>
                <Card.Text className="text-white">
                  January 10, 2026
                  <br />
                  Computer Science Lab
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
