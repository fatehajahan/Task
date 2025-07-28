import React, { useState } from 'react';
import loginImg from '../../assets/login.png';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex h-screen font-poppins">
            {/* Left Side */}
            <div className="w-1/2 md:block hidden">
                <img src={loginImg} alt="Login" className="h-full w-full object-cover" />
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 w-full flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
                    <p className="text-center text-gray-500 mb-6">
                        Welcome Back, Please Enter your Details to Log In.
                    </p>

                    {/* inputs */}
                    <form className="space-y-4">
                        <div>
                            <label className="text-sm font-medium block mb-1">Email Address</label>
                            <input
                                type="email"
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

                        <div className="flex justify-between text-sm text-gray-600">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-green-400" />
                                <span>Remember me</span>
                            </label>
                            <Link to="/resendPassword">
                                <span className="cursor-pointer hover:underline">Forgot password?</span>
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#60e5ae] hover:bg-green-500 transition text-black font-semibold p-3 rounded cursor-pointer"
                        >
                            Log In
                        </button>
                    </form>

                    {/* OR Line */}
                    <div className="flex items-center justify-center mt-6 mb-2">
                        <hr className="w-1/2 border-gray-400" />
                        <span className="mx-2 text-gray-400">Or</span>
                        <hr className="w-1/2 border-gray-400" />
                    </div>

                    <Link to="/">
                        <p className="text-center text-sm">
                            Don’t have an account?
                            <span className="text-black font-semibold cursor-pointer hover:underline">
                                Sign Up
                            </span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
