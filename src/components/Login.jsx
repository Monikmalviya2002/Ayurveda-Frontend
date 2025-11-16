import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6">
       
        <div className="w-full flex justify-center">
          <img 
            src="/src/assets/yoga.jpg" 
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
        </div>

        <h1 className="text-green-500 text-4xl font-bold text-center mt-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="text-gray-700 text-center mt-2">
          {isLogin 
            ? "Continue your journey toward balance!" 
            : "Join us and start your wellness path!"
          }
        </p>

        
        <div className="card bg-white-100 w-full mt-6 shadow-md">
          <div className="card-body">
            <fieldset className="fieldset space-y-3">

             
              {!isLogin && (
                <div>
                  <label className="label font-medium text-black">Full Name</label>
                  <input type="text" className="input input-bordered w-full" placeholder="Full Name" />
                </div> )}
             

              <div>
                <label className="label font-medium text-black">Email</label>
                <input type="email" className="input input-bordered w-full" placeholder="Email" />
              </div>

              <div>
                <label className="label font-medium text-black">Password</label>
                <input type="password" className="input input-bordered w-full" placeholder="Password" />
              </div>

              
              {isLogin && (
                <div>
                  <a className="link link-hover text-sm text-black">Forgot password?</a>
                </div>
              )}

              
              <button className="btn w-full mt-2 bg-green-600 text-white hover:bg-green-700">
                {isLogin ? "Login" : "Sign Up"}
              </button>

            </fieldset>
          </div>
        </div>

        
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
