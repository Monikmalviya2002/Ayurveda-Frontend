import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/HomePage';
import { BlogsPage } from './pages/BlogsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path='/blogs' element={<BlogsPage/>} /> 
          <Route path='/blogs/:blogId' element={<BlogDetailsPage/>}/>
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </main>
    </Router>
  );
}
