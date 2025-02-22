import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import SelectYearSemester from './components/SelectYearSemester';
import Semester1 from './pages/Semester1';
import Semester2 from './pages/Semester2';
import Semester3 from './pages/Semester3';
import Semester4 from './pages/Semester4';
import Semester5 from './pages/Semester5';
import Semester6 from './pages/Semester6';
import Semester7 from './pages/Semester7';
import Semester8 from './pages/Semester8';

import UnitNotes from './components/UnitNotes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/select" element={<SelectYearSemester />} />
        <Route path="/subjects/semester-1" element={<Semester1 />} />
        <Route path="/subjects/semester-2" element={<Semester2 />} />
        <Route path="/subjects/semester-3" element={<Semester3 />} />
        <Route path="/subjects/semester-4" element={<Semester4 />} />
        <Route path="/subjects/semester-5" element={<Semester5 />} />
        <Route path="/subjects/semester-6" element={<Semester6 />} />
        <Route path="/subjects/semester-7" element={<Semester7 />} />
        <Route path="/subjects/semester-8" element={<Semester8 />} />
        {/* Add routes for Semester2 to Semester8 here */}
        {/* Route for unit-wise notes page for the selected subject */}
        <Route path="/subjects/:semesterId/:subjectName" element={<UnitNotes />} />
      </Routes>
    </Router>
  );
};

export default App;
