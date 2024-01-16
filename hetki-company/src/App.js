import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Commercial from "./pages/commercial";
import Film from "./pages/film";
import Portfolio from "./pages/portfolio";
import Creatives from "./pages/creatives";
import Contact from "./pages/contact";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/film" element={<Film />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/creatives" element={<Creatives />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
