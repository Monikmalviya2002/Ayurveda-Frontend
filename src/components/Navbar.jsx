import React from "react";
import { Link } from "react-router-dom";



export default function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <nav className="navbar sticky top-0 z-40 bg-gradient-to-r from-green-800 to-green-700 shadow-lg text-white w-full">
      <div className="w-full"> 
        <div className="flex justify-between items-center h-16 w-full px-2 md:px-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-800 font-bold text-lg">🍃</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">
              AYURCONNECT
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="hover:text-amber-200 transition">Home</Link>
            <Link to="/blogs" className="hover:text-amber-200 transition">Blogs</Link>
            <Link to="/VideoDashboard" className="hover:text-amber-200 transition">Videos</Link>
            <Link to="/doctors" className="hover:text-amber-200 transition">Doctors</Link>
            <Link to="/account" className="hover:text-amber-200 transition">My Account</Link>
         </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onLoginClick}
              className="btn btn-ghost text-white hover:text-amber-200"
            >
              Login
            </button>

            <button
              onClick={onSignupClick}
              className="btn bg-amber-200 text-green-900 font-semibold rounded-full hover:bg-amber-300 border-none"
            >
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost text-white">
                ☰
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-green-800 rounded-box w-48"
              >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/VideoDashboard">Videos</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                <li><Link to="/account">My Account</Link></li>
                <li><button onClick={onLoginClick}>Login</button></li>
                <li><button onClick={onSignupClick}>Sign Up</button></li>

                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
