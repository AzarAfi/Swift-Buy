import React, { useState } from 'react';
/* import logo */
import profilelogo from "../assest/signin.gif";
/* import icon */
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  /* Using hooks */
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", data);
    // Handle the login logic (e.g., API call here)
  };

  return (
    <main className='w-screen h-screen flex justify-center items-center bg-gray-100'>
      <form
        className='w-full sm:w-96 md:w-1/3 border-4 border-gray-300 bg-white rounded-lg shadow-lg p-8 flex flex-col items-center'
        onSubmit={handleSubmit}
      >
        <h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
          Login Page
        </h1>
        <img src={profilelogo} alt="Profile Logo" className='w-32 mb-6' />
        
        <div className='w-full space-y-4'>
          {/* Email Input */}
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-lg font-medium text-gray-700'>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className='w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleOnChangeInput}
              value={data.email}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className='flex flex-col'>
            <label htmlFor="password" className='text-lg font-medium text-gray-700'>
              Password
            </label>
            <div className='w-full border-2 border-gray-300 flex items-center rounded-md'>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className='w-full p-3 mt-2 border-none focus:outline-none'
                onChange={handleOnChangeInput}
                value={data.password}
                placeholder="Enter your password"
                required
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className='cursor-pointer text-gray-600 pr-3'
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className='w-full py-3 bg-blue-600 text-white font-semibold rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
          >
            Login
          </button>
        </div>

        <p className='mt-4 text-center text-gray-600 text-sm'>
          Don't have an account? 
          <Link to="/signin"><p className='text-blue-600 hover:underline'>Sign up</p></Link>
          <Link to="/forgotpassword"><p className='text-blue-600 hover:underline'>Forgot Password </p></Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;
