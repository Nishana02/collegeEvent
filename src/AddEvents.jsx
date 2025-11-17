import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { addEvents, editEvents } from "./services/allApi";
import Swal from "sweetalert2";

const AddEvents = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    type: "",
    department: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    posterURL: "",
    fee: "",
    organizer: "",
    organizerEmail: "",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (location.state?.event) {
      setFormData(location.state.event);
      setEditId(location.state.event.id);
    }
  }, [location.state]);

  const handleAddEvent = async () => {
    try {
      const res = await addEvents(formData);
      if (res.status === 201) {
        Swal.fire({
          title: "Success",
          text: "Event added successfully",
          icon: "success",
        });
        resetForm();
      } else {
        Swal.fire({
          title: "Error",
          text: "Error occurred while adding",
          icon: "error",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditEvent = async () => {
    try {
      const res = await editEvents(editId, formData);
      if (res.status === 200) {
        Swal.fire({
          title: "Error",
          text: "Event updated successfully",
          icon: "error",
        });
        resetForm();
      } else {
        Swal.fire({
          title: "Error",
          text: "Error occurred while updating",
          icon: "error",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      type: "",
      department: "",
      description: "",
      date: "",
      time: "",
      venue: "",
      posterURL: "",
      fee: "",
      organizer: "",
      organizerEmail: "",
    });
    setEditId(null);
    navigate("/events");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editId ? handleEditEvent() : handleAddEvent();
  };

  return (
    <div
      className="event-form-wrapper"
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "30px",
        background: "#f7f7f7",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginTop: "100px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
        {editId ? "Edit Event" : "Add Event"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <label>Event Title</label>
            <input
              type="text"
              placeholder="Enter event title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label>Category</label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select category</option>
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Seminar">Seminar</option>
              <option value="Workshop">Workshop</option>
            </select>
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <label>Event Type</label>
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div style={{ flex: 1 }}>
            <label>Department</label>
            <input
              type="text"
              placeholder="Department organizing the event"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Description</label>
          <textarea
            placeholder="Enter event description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <label>Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label>Time</label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Venue</label>
          <input
            type="text"
            placeholder="Venue / online platform"
            value={formData.venue}
            onChange={(e) =>
              setFormData({ ...formData, venue: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Poster URL</label>
          <input
            type="text"
            placeholder="Enter poster URL"
            value={formData.posterURL}
            onChange={(e) =>
              setFormData({ ...formData, posterURL: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Event Fee</label>
          <input
            type="text"
            placeholder="Free / Amount"
            value={formData.fee}
            onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <label>Organizer</label>
            <input
              type="text"
              placeholder="Club / Department"
              value={formData.organizer}
              onChange={(e) =>
                setFormData({ ...formData, organizer: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label>Organizer Email</label>
            <input
              type="email"
              placeholder="Enter organizer email"
              value={formData.organizerEmail}
              onChange={(e) =>
                setFormData({ ...formData, organizerEmail: e.target.value })
              }
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#1a73e8",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {editId ? "Update Event" : "Add Event"}
        </button>
      </form>
    </div>
  );
};

export default AddEvents;
