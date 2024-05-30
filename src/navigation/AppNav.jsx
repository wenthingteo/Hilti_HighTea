import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Persona from '../pages/persona_home';
import MockIV from '../pages/mockiv_home';
import Home from '../pages/home';
import JobRecommendation from '../pages/job_recommendation';
import Profile from '../pages/profile';

function AppNav() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai_persona" element={<Persona />} />
        <Route path="/mock_interview" element={<MockIV />} />
        <Route path="/job_recommendation" element={<JobRecommendation />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppNav;
