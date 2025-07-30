import React, { useState } from 'react';
import signUpImg from '../../assets/signUp.png';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const SignUp = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userData.name || !userData.email || !userData.password || !userData.confirmPassword) {
            return toast.error("Please fill all the fields")
        }

        if (userData.password !== userData.confirmPassword) {
            return toast.error("Passwords do not match")
        }
        if (userData.email)
            console.log(userData, "userdata")
        await axios.post("http://localhost:3000/api/v1/users/registration", userData)
        
            .then((res) => {
                toast.success(res.data.message)
                console.log('reg done')
                setUserData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
                setTimeout(() => {
                    navigate("/login")
                }, 1000)
            }).catch((error) => {
                console.log(error)

                if (error.response && error.response.data && error.response.data.message) {
                    toast.error(error.response.data.message)
                } 
            })
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

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
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-sm font-medium block mb-1">Full Name</label>
                            <input
                                onChange={handleChange}
                                name='name'
                                value={userData.name}
                                className="w-full p-3 border border-gray-300 rounded"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium block mb-1">Email Address</label>
                            <input
                                onChange={handleChange}
                                name='email'
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
                                name='password'
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

                        <div className="relative">
                            <label className="text-sm font-medium block mb-1">Confirm Password</label>
                            <input
                                onChange={handleChange}
                                name='confirmPassword'
                                value={userData.confirmPassword}
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