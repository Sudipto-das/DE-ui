import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topber: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="w-full bg-[#26535b] text-white p-4 flex justify-between items-center mt-5 rounded-lg">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold font-inter bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                    Choose the rooms that make you swoon
                </h1>
                <p className="text-md font-inter bg-gradient-to-r from-purple-200 to-yellow-400 bg-clip-text text-transparent">
                    Decisions are hard pick as many as you want.
                </p>
            </div>
            <button
                className="flex items-center px-4 py-2 rounded-full shadow-md bg-[#f3f35f] text-black font-semibold "
                onClick={() => navigate(-1)}
            >
                <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                    </svg>
                </span> 
                <span className=' font-inter'>Go Back</span>
            </button>
        </div>
    );
};

export default Topber;
