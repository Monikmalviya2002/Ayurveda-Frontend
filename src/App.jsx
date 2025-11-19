import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/HomePage';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import { BlogsPage } from './pages/BlogsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import VideoDashboard from './components/VideoDashboard';
import DoctorDirectoryPage from './pages/DoctorsDirectoryPage';
import DoctorProfile from './pages/DoctorProfile'; 
import AdminPage from './pages/Admin/AdminPage'
import BlogCreateForm from './pages/Doctor/BlogCreateForm.jsx'

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/blogs' element={<BlogsPage/>} /> 
          <Route path='/blogs/:blogId' element={<BlogDetailsPage/>}/>
          <Route path='/videos' element={<VideoDashboard/>}/> 
          <Route path='/doctors' element={<DoctorDirectoryPage/>} /> 
          <Route path ='/doctors/:id' element={<DoctorProfile/>}/> 
           <Route path='/doctor/writeBlog' element={<BlogCreateForm/>}/>
          <Route path='/admin' element={<AdminPage/>} />
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </main>
    </Router>
  );
}