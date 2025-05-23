import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Background from './components/Background';
// import Ecllipse from './components/Ecllipse';
import WatchvideoSection from './Pages/Watchvideo';
import AddCourseForm from './Pages/AddCourseForm';
import CourseList from './Pages/CourseList';
import CourseDetailsPopUp from './Pages/CourseDetailsPopUp';
import MainAssessment from './Pages/MainAssessment';


function App() {
  return (
    <Router>
      <div className="flex justify-center">
        <Background />
        <Header />
      </div>
      <Routes>
        <Route path="/Watchvideo/:id" element={<WatchvideoSection />} />
        <Route path="/addCourse" element={<AddCourseForm />} /> 
        <Route path="/viewCourse" element={<CourseList />} />
        <Route path="/courseDetailsPopUp" element={<CourseDetailsPopUp />} />
        <Route path="/MainAssessment" element={<MainAssessment />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

