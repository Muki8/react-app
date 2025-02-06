import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Sumadora from "./components/Sumadora";
import Traductor from "./components/Traductor";
import TablaMultiplicar from "./components/TablaMultiplicar";
import Experiencia from "./components/Experiencia";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sumadora" element={<Sumadora />} />
        <Route path="/traductor" element={<Traductor />} />
        <Route path="/tabla" element={<TablaMultiplicar />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </Router>
  );
}

export default App;

