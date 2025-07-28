import React from 'react';
import forgotPass from '../../assets/forgotPass.png';
import { FaRegClock } from 'react-icons/fa';

const ResendPassword = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pb-10 relative">
      <img
        src={forgotPass}
        alt="Forgot Password"
        className="w-full  object-cover mb-8 absolute top-0"
      />

      {/* Form Container */}
      <div className="w-full max-w-[1320px] p-8 bg-white rounded-xl shadow-md text-center absolute top-[15%]">
        {/* Clock Icon */}
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#60e5ae] shadow-lg">
          <FaRegClock className="text-white text-3xl" />
        </div>

        {/* Headings */}
        <h2 className="text-2xl font-bold mb-2">Reset your Password</h2>
        <p className="text-gray-500 text-sm mb-6">
          Strong passwords include numbers, letters, and punctuation marks.
        </p>

        {/* Form Inputs */}
        <div className="max-w-xl mx-auto text-left">
          <label className="text-sm font-medium block mb-1">Email Address</label>
          <input
            className="w-full p-3 border border-gray-300 rounded mb-4"
            placeholder="m32220@gmail.com"
          />

          <label className="text-sm font-medium block mb-1">Enter New Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded mb-4"
            placeholder="**************"
          />

          <label className="text-sm font-medium block mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded mb-6"
            placeholder="Retype password"
          />

          <button className="w-full bg-green-400 text-white p-3 rounded hover:bg-green-500 transition font-semibold">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResendPassword;
