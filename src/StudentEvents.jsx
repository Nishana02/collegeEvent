import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { IoLocation } from "react-icons/io5";

const StudentEvents = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:3000/eventsData");
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = (eventId) => {
    navigate(`/registerform/${eventId}`);
  };

  return (
    <div style={{ paddingBottom: "40px" }}>
      <div
        style={{
          background: "#eef3ff",
          padding: "50px 20px",
          borderBottom: "1px solid #d6dffc",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "800",
            color: "#1a73e8",
            textAlign: "center",
          }}
        >
          Available Events
        </h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "30px",
          padding: "40px",
        }}
      >
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              style={{
                background: "white",
                padding: "18px",
                borderRadius: "14px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                transition: "0.25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
            >
          
              <img
                src={event.posterURL}
                alt="poster"
                style={{
                  width: "100%",
                  height: "170px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />

              <h3
                style={{
                  marginTop: "14px",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                {event.title}
              </h3>

        
              <p style={{ margin: "6px 0", color: "#444" }}>
                <SlCalender /> {event.date}
              </p>

              
              <p style={{ margin: "6px 0", color: "#444" }}>
                <IoLocation /> {event.venue}
              </p>

            
              <p
                style={{
                  margin: "6px 0",
                  color: "#555",
                  fontWeight: "500",
                }}
              >
                Category: {event.category}
              </p>

          
              <p
                style={{
                  margin: "6px 0",
                  color: "#555",
                  fontWeight: "500",
                }}
              >
                Fee: {event.fee}
              </p>

              <button
                onClick={() => handleRegister(event.id)}
                style={{
                  width: "100%",
                  padding: "12px 0",
                  background: "#1a73e8",
                  border: "none",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "12px",
                  fontSize: "16px",
                }}
              >
                Register
              </button>
            </div>
          ))
        ) : (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              marginTop: "40px",
              fontSize: "18px",
              color: "#777",
            }}
          >
            No events found.
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentEvents;
