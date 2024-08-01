import React, { useState } from 'react';
import OtpCard from './otpCard';
import { fetchCountryCodes } from '../../functions/api/fetchCountryCode';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CountryCode } from '../../types/countryCode';
import { sendOtp } from '../../functions/api/login/sendOtp';
import Loader from '../ui/loader';

const Login: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [loading,setLoading] = useState(false);

    const { data: countryCodes } = useQuery<CountryCode[]>({ queryKey: ['countryCodes'], queryFn: fetchCountryCodes });

    const handleSendOtp = (event: React.FormEvent) => {
        event.preventDefault();
        mutation.mutate({ phone: phoneNumber, countryCode: selectedCountryCode })   
    };
    const mutation = useMutation({
        mutationFn: sendOtp,
        onSuccess: () => {
            setLoading(false);
            setIsOpen(true);
        },
        onMutate: () => {
            setLoading(true);
        },
        onError: (error) => {
            console.log(error)
        }
    })


    return (
        <div className="flex justify-center items-center min-h-screen font-inter">
            <div className="absolute top-8 w-full">
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
                        <label className="block text-sm font-medium text-gray-700">Country Code</label>
                        <select
                            value={selectedCountryCode}
                            onChange={(e) => setSelectedCountryCode(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select your country code...</option>
                            {countryCodes?.map(({ code, name }) => (
                                <option key={`${code}-${name}`} value={code}>
                                    {name} ({code})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            placeholder="Enter your phone number..."
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handleSendOtp}
                        disabled={loading || !phoneNumber || !countryCodes}
                        type="submit"
                        className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">Not registered yet? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Create an account</a></span>
                </div>
                {loading && <Loader /> }
            </div>
            {isOpen && <OtpCard phone={phoneNumber} countryCode={selectedCountryCode}/>}
        </div>
    );
}

export default Login;
