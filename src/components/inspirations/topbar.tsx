// Header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topber: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="  w-full bg-[#26535b] text-white p-4 flex justify-between items-center mt-5 rounded-lg">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold font-inter">Choose the rooms that make you swoon</h1>
                <p className="text-md font-inter">Decisions are hard pick as many as you want.</p>
            </div>
            <button
                className="flex items-center bg-white text-black px-3 py-1 rounded-full shadow-md"
                onClick={() => navigate(-1)}
            >
                <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3584e4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg></span> 
                <span className='text-[#3584e4] font-inter'>Go Back</span>
            </button>
        </div>
    );
};

export default Topber;
