import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
import PersonaHome from '../pages/ai_persona/persona_home';
import MockivHome from '../pages/mock_interview/mockiv_home';

const AppNav = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/ai_persona" element={<PersonaHome />} />
        <Route path="/mock_interview" element={<MockivHome />} />
      </Routes>
    </Router>
  );
};

export default AppNav;
