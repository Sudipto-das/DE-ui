import React, { useState } from 'react';
import { fetchCountryCodes } from '../../functions/api/fetchCountryCode';
import { useQuery } from '@tanstack/react-query';
import { CountryCode } from '../../types/countryCode';
import Loader from '../ui/loader';
import { AppContext } from '../../context/Context';
import getUserByPhone from '../../functions/api/login/getLogin';
import { useNavigate } from 'react-router-dom';
import { profileDataState } from '../../store/profileState/userProfileState';
import { useSetRecoilState } from 'recoil';


const Login: React.FC = () => {
    const [selectedCountryCode, setSelectedCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const setProfileData = useSetRecoilState(profileDataState);
    const { data: countryCodes } = useQuery<CountryCode[]>({ queryKey: ['countryCodes'], queryFn: fetchCountryCodes });
    const {
        setData: setLoggedInUser,
        raiseToast,

    } = React.useContext(AppContext);
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        if (!phoneNumber || !selectedCountryCode) {
            return; // Early return if phone number or country code is not selected
        }

        setLoading(true); // Set loading state to true
        setErrorMessage(null); // Reset error message
        try {
            const response = await getUserByPhone(phoneNumber, selectedCountryCode); // Call the API function


            // Check if the response has the expected structure
            if (response && response.data) {
                setLoggedInUser(response.data)
                setProfileData({
                    user: response.data,
                    isLoading: false,
                })
                raiseToast("Login successful!", "success");
                navigate("/dashboard/");
            } else {
                throw new Error("Invalid response format");
            }

        } catch (error: any) {
            console.error(error); // Log the error for debugging
            setErrorMessage("Failed to login. Please check your details and try again."); // Set error message
        } finally {
            setLoading(false); // Set loading state to false
        }
    };


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

                <form onSubmit={handleLogin}> {/* Attach handleLogin to form submission */}
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
                        disabled={loading || !phoneNumber || !selectedCountryCode}
                        type="submit"
                        className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {loading ? <Loader /> : 'Login'} {/* Show loader while loading */}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">Not registered yet? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Create an account</a></span>
                </div>
                {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>} {/* Show error message */}
            </div>
        </div>
    );
}

export default Login;
