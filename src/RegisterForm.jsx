import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEvents, registerStudent } from "./services/allApi";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d0d0d0",
    fontSize: "15px",
    outline: "none",
    transition: "0.2s",
  };

  const groupStyle = {
    marginBottom: "18px",
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    marginBottom: "6px",
    fontWeight: "600",
    color: "#333",
  };
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventName: "",
    category: "",
    studentName: "",
    studentEmail: "",
    studentPhone: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await getEvents();
        const selectedEvent = res.data.find((e) => e.id.toString() === eventId);

        if (selectedEvent) {
          setFormData((prev) => ({
            ...prev,
            eventName: selectedEvent.title,
            category: selectedEvent.category,
          }));
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { studentName, studentEmail, studentPhone } = formData;

    if (!studentName || !studentEmail || !studentPhone) {
      Swal.fire({
        title: "Error",
        text: "Please fill all fields",
        icon: "error",
      });
      return;
    }

    try {
      const res = await registerStudent(formData);

      if (res.status === 201 || res.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Registered Successfully!",
          icon: "success",
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "Error",
          text: "Registration failed",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "API error occurred",
        icon: "error",
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "50px auto",
        padding: "35px",
        background: "white",
        borderRadius: "14px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
        marginTop: "100px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "28px",
          color: "#1a73e8",
          fontWeight: "800",
        }}
      >
        Register for Event
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={groupStyle}>
          <label style={labelStyle}>Event Name</label>
          <input
            type="text"
            value={formData.eventName}
            readOnly
            style={inputStyle}
          />
        </div>

        <div style={groupStyle}>
          <label style={labelStyle}>Category</label>
          <input
            type="text"
            value={formData.category}
            readOnly
            style={inputStyle}
          />
        </div>

        <div style={groupStyle}>
          <label style={labelStyle}>Student Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.studentName}
            onChange={(e) =>
              setFormData({ ...formData, studentName: e.target.value })
            }
            style={inputStyle}
          />
        </div>

        <div style={groupStyle}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.studentEmail}
            onChange={(e) =>
              setFormData({ ...formData, studentEmail: e.target.value })
            }
            style={inputStyle}
          />
        </div>

        <div style={groupStyle}>
          <label style={labelStyle}>Phone</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={formData.studentPhone}
            onChange={(e) =>
              setFormData({ ...formData, studentPhone: e.target.value })
            }
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            background: "#1a73e8",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
