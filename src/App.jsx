import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Events from "./Events";
import AddEvents from "./AddEvents";
import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";
import Footer from "./Footer";
import StudentEvents from "./StudentEvents";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/addevents" element={<AddEvents />} />
        <Route path="/studentevents" element={<StudentEvents />} />
        <Route path="/registerform/:id" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
