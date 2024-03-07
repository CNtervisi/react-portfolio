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
          <Route path="/react-portfolio/" element={<Home />} />
          <Route path="/react-portfolio/education" element={<Education />} />
          <Route path="/react-portfolio/experience" element={<Experience />} />
          <Route
            path="/react-portfolio/certifications"
            element={<Certifications />}
          />
          <Route path="/react-portfolio/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
