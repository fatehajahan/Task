import React, { useState } from 'react';
import loginImg from '../../assets/login.png';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const url = import.meta.env.VITE_APP_URL
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    
    const handleChange = (e) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(userData, "userdata");
        if (!userData.email || !userData.password) {
            return toast.error("Please fill all the fields")
        }
        
        axios.post(`${url}/users/login`, userData, {
            withCredentials: true,
        })
            .then((res) => {
                if (res.data.error || res.data.message?.includes('Invalid') || res.data.message?.includes('not found')) {
                    toast.error(res.data.error || res.data.message);
                    return;
                }
                
                toast.success(res.data.message || "Login successful!");
                console.log("You've logged in");
                console.log(res.data.user);
                
                setUserData({
                    email: "",
                    password: "",
                });
                
            })
            .catch((error) => {
                console.log("Login error:", error);
                console.log("Error response:", error.response);
                
                if (error.response && error.response.data && error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Login failed. Please try again.");
                }
            });
    };

    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <div className="flex h-screen font-poppins">
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

                    {/* Input Fields */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-sm font-medium block mb-1">Email Address</label>
                            <input
                                onChange={handleChange}
                                name="email"
                                value={userData.email}
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="relative">
                            <label className="text-sm font-medium block mb-1">Password</label>
                            <input
                                onChange={handleChange}
                                name="password"
                                value={userData.password}
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

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#60e5ae] hover:bg-green-500 transition text-black font-semibold p-3 rounded cursor-pointer"
                            >
                                Log In
                            </button>
                        </div>
                    </form>

                    {/* OR Line */}
                    <div className="flex items-center justify-center mt-6 mb-2">
                        <hr className="w-1/2 border-gray-400" />
                        <span className="mx-2 text-gray-400">Or</span>
                        <hr className="w-1/2 border-gray-400" />
                    </div>

                    <Link to="/">
                        <p className="text-center text-sm">
                            Don't have an account?
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