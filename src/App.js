import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Certifications from "./components/certifications";
import Education from "./components/education";
import Experience from "./components/experience";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
