import React from 'react';
import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify'
import forgotPass from '../../assets/forgotPass.png';
import { FaEye, FaEyeSlash, FaRegClock } from 'react-icons/fa';
import axios from 'axios';

const ResendPassword = () => {
  const url = import.meta.env.VITE_APP_URL
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = async () => {
    if (!email || !newPassword || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        `${url}/forgotPassword/resendPassword`,
        {
          email,
          newPassword,
          confirmPassword,
        }
      );

      toast.success("Password has been reset successfully.");
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');

    } catch (err) {
      toast.error("Internal Server Error. Please try again.");
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pb-10 relative">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mb-4"
            placeholder="m32220@gmail.com"
          />

          <div className="relative">
            <label className="text-sm font-medium block mb-1">Enter New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-4"
              placeholder="**************"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[42px] text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-medium block mb-1">Confirm Password</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-6"
              placeholder="Retype password"
            />
            <div
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-[42px] text-gray-500 cursor-pointer"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button onClick={handleReset} className="w-full bg-green-400 text-white p-3 rounded hover:bg-green-500 transition font-semibold cursor-pointer">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResendPassword;