import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RentCar from "./pages/RentCar";
import About from "./pages/About";
import AddCarForm from "./pages/AddCar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent-car" element={<RentCar />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-cars" element={<AddCarForm />} />
      </Routes>
    </Router>
  );
};

export default App;
