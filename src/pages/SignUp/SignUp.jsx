import React, { useState } from 'react';
import signUpImg from '../../assets/signUp.png';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    return (
        <div className="flex h-screen font-poppins">
            {/* Left Side */}
            <div className="w-1/2 md:block hidden">
                <img src={signUpImg} alt="Sign Up" className="h-full w-full object-cover" />
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 w-full flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center mb-2">Sign Up</h2>
                    <p className="text-center text-gray-500 mb-6">
                        To Create Account, Please Fill in the Form Below.
                    </p>

                    {/* Input Fields */}
                    <form className="space-y-4">
                        <div>
                            <label className="text-sm font-medium block mb-1">Full Name</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium block mb-1">Email Address</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="relative">
                            <label className="text-sm font-medium block mb-1">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full p-3 border border-gray-300 rounded pr-10"
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
                                className="w-full p-3 border border-gray-300 rounded pr-10"
                                placeholder="Retype password"
                            />
                            <div
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-3 top-[42px] text-gray-500 cursor-pointer"
                            >
                                {showConfirm ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#60e5ae] hover:bg-green-500 transition text-black font-semibold p-3 rounded cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* OR Line */}
                    <div className="flex items-center justify-center mt-6 mb-2">
                        <hr className="w-1/2 border-gray-400" />
                        <span className="mx-2 text-gray-400">Or</span>
                        <hr className="w-1/2 border-gray-400" />
                    </div>

                    <Link to="/login">
                        <p className="text-center text-sm">
                            Already have an account?
                            <span className="text-black font-semibold cursor-pointer hover:underline">
                                Log In
                            </span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
