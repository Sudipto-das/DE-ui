import React from 'react';
import './loader.css';

interface LoaderProps {
    height?: number;
    width?: number;
}

const Loader: React.FC<LoaderProps> = ({ height = 48, width =  48}) => {
    return (
        <div className="flex w-full justify-center items-center" >
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="#62a0ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-circle spin">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
        </div>
    );
};

export default Loader;
