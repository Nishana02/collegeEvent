import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onClickLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:3000/students?email=${email}`
      );

      if (res.data.length === 0) {
        alert("Student not found!");
        return;
      }

      const student = res.data[0];

      if (student.password === password) {
        alert("Student Login Successful!");
        navigate("/studentevents");
      } else {
        alert("Incorrect password!");
      }
    } catch (err) {
      alert("Error logging in");
      console.log(err);
    }
  };

  return (
    <div className="student-login-container">
      <div className="student-login-box">
        <h2>Student Login</h2>

        <form onSubmit={onClickLogin}>
          <input
            type="email"
            placeholder="Student Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Student Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
