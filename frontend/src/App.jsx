import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Ecllipse from './components/Ecllipse';
import WatchvideoSection from './Pages/watchvideo';
import AdminCourseWrapper from './Pages/AdminCourseWrapper'
function App() {
  return (
    <Router>
      <div className="flex justify-center">
        <Ecllipse />
        <Header />
      </div>
      <Routes>
         <Route path="/Watchvideo" element={<WatchvideoSection />} />
        {/* <Route path="/admincourse" element={<AdminCourseWrapper />} />  */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

