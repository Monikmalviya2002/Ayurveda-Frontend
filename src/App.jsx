import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/HomePage';
import { BlogsPage } from './pages/BlogsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import VideoDashboard from './components/VideoDashboard';
import DoctorDirectoryPage from './pages/DoctorsDirectoryPage'; 
import AdminPage from './pages/Admin/AdminPage'
import ConsultationBookingPage from './pages/ConsultationBookingPage';



export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path='/blogs' element={<BlogsPage/>} /> 
          <Route path='/blogs/:blogId' element={<BlogDetailsPage/>}/>
          <Route path='/videos' element={<VideoDashboard/>}/> 
          <Route path='/doctors' element={<DoctorDirectoryPage/>} /> 
          <Route path='/admin' element={<AdminPage/>} />   
          <Route path='/consult' element={<ConsultationBookingPage/>}/>
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </main>
    </Router>
  );
}