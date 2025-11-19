import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Events from "./Events";
import AddEvents from "./AddEvents";
import Footer from "./Footer";
import StudentEvents from "./StudentEvents";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/addevents" element={<AddEvents />} />
        <Route path="/studentevents" element={<StudentEvents />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
