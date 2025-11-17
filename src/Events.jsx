import React, { useEffect, useState } from "react";
import { deleteEvents, getEvents } from "./services/allApi";
import Swal from "sweetalert2";
import { SlCalender } from "react-icons/sl";
import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    try {
      let apiResponse = await getEvents();
      if (apiResponse.status === 200) {
        setEvents(apiResponse.data);
      } else {
        Swal.fire({
          title: "Error",
          text: "Error occurred while fetching events",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteClick = async (id) => {
    try {
      let apiResponse = await deleteEvents(id);

      if (apiResponse.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Successfully deleted",
          icon: "success",
        });
        getAllEvents();
      } else {
        Swal.fire({
          title: "Error",
          text: "Error occurred while deleting",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onEditClick = (event) => {
    navigate("/addevents", { state: { event } });
  };

  return (
    <div style={{ paddingBottom: "40px" }}>
      <div
        style={{
          background: "#f7f7f7",
          padding: "30px 20px",
          height: "150px",
          borderBottom: "1px solid #e2e2e2",
        }}
      >
        <h1
          style={{
            margin: "50px",
            fontSize: "32px",
            fontWeight: "800",
            color: "#222",
            textAlign: "center",
          }}
        >
          Events List
        </h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "25px",
          padding: "0 40px",
          marginTop: "80px",
        }}
      >
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              style={{
                background: "white",
                padding: "15px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={event.posterURL}
                alt="poster"
                style={{
                  width: "100%",
                  height: "160px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />

              <h3
                style={{
                  marginTop: "12px",
                  fontSize: "20px",
                  color: "#222",
                }}
              >
                {event.title}
              </h3>

              <p style={{ margin: "5px 0", color: "#444" }}>
                <SlCalender /> {event.date}
              </p>
              <p style={{ margin: "5px 0", color: "#444" }}>
                <IoLocation /> {event.venue}
              </p>

              <p
                style={{
                  margin: "5px 0",
                  color: "#555",
                  fontWeight: "500",
                }}
              >
                Category: {event.category}
              </p>

              <p
                style={{
                  margin: "5px 0",
                  color: "#555",
                  fontWeight: "500",
                }}
              >
                Fee: {event.fee}
              </p>

              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <button
                  onClick={() => onEditClick(event)}
                  style={{
                    flex: 1,
                    padding: "8px 0",
                    background: "#1a73e8",
                    border: "none",
                    color: "white",
                    fontWeight: "500",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => onDeleteClick(event.id)}
                  style={{
                    flex: 1,
                    padding: "8px 0",
                    background: "#e53935",
                    border: "none",
                    color: "white",
                    fontWeight: "500",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
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

export default Events;
