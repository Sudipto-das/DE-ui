import React from 'react';
import './loader.css' 
const Loader: React.FC = () => {
    return (
        <div className=' flex w-full justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#62a0ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-circle spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        </div>
    );
};

export default Loader;
