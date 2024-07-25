import React, { useState } from 'react';
import OtpCard from './otpCard';

const Login: React.FC = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleSendOtp = (event: React.FormEvent) =>{
        event.preventDefault()
        setIsOpen(true)
    }
    
    return (
        <div className=" flex justify-center items-center min-h-screen" >
            <div className="absolute top-8  w-full ">
                <div className="flex items-center ml-8 mb-5">
                    <img src="/LOGO.png" alt="Logo" className="w-9 h-9 mr-2" />
                    <span className="text-xl font-bold text-green-900">Design Elementary</span>
                </div>
                <hr className="border-t border-gray-200 mt-2" />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-slate-600">Login</h1>
                    <p className="mt-2">Hi, Welcome back 👋</p>
                </div>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="phone"
                            placeholder="Enter your phone number..."
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <button
                        onClick={handleSendOtp}
                        type="submit"
                        className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">Not registered yet? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Create an account</a></span>
                </div>
            </div>
            {isOpen && <OtpCard/>}
        </div>
    );
}

export default Login;
