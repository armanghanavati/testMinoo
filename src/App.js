import React, { useState } from 'react';
import Matris from './components/matris/Matris';
import { Button, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FoodMenuPage from './pages/FoodMenuPage';
import Home from './pages/Home';

const App = () => {

  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/matris" element={<Matris />} />
          <Route path="/food" element={<FoodMenuPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


export const NavLinks = () => {
  return (
    <Navbar>
      <Link to="/" > فهرست </Link>
    </Navbar>
  )
}