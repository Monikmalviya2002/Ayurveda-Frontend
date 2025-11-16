import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-lime-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 border border-green-200">
        
        {/* LOGO */}
        <div className="w-full flex justify-center">
          <img 
            src="/src/assets/yoga.jpg" 
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-green-600 text-4xl font-bold text-center mt-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-700 text-center mt-2">
          {isLogin 
            ? "Continue your journey toward balance!"
            : "Join us and start your wellness path!"
          }
        </p>

        {/* FORM CARD */}
        <div className="card bg-white w-full mt-6 shadow-md border border-green-100">
          <div className="card-body">
            <fieldset className="fieldset space-y-3">

              {/* Full Name (Only Signup) */}
              {!isLogin && (
                <div>
                  <label className="label font-medium text-black">Full Name</label>
                  <input type="text" className="input input-bordered w-full" placeholder="Full Name" />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="label font-medium text-black">Email</label>
                <input type="email" className="input input-bordered w-full" placeholder="Email" />
              </div>

              {/* Password */}
              <div>
                <label className="label font-medium text-black">Password</label>
                <input type="password" className="input input-bordered w-full" placeholder="Password" />
              </div>

              {/* Forgot password (only login) */}
              {isLogin && (
                <div>
                  <a className="link link-hover text-sm text-green-700">Forgot password?</a>
                </div>
              )}

              {/* Button */}
              <button className="btn w-full mt-2 bg-green-600 text-white hover:bg-green-700">
                {isLogin ? "Login" : "Sign Up"}
              </button>

            </fieldset>
          </div>
        </div>

        {/* SWITCH BETWEEN LOGIN AND SIGNUP */}
        <p className="text-center mt-4 text-sm text-gray-700">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span 
                className="text-green-600 font-semibold cursor-pointer hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span 
                className="text-green-600 font-semibold cursor-pointer hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </>
          )}
        </p>

      </div>
    </div>
  )
}

export default Login
