import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/HomePage';

<<<<<<< HEAD


const App = () => {
=======
export default function App() {
>>>>>>> bbeea8439da04f5589d474ea91bfe290e9ee3b46
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </main>
    </Router>
  );
}
