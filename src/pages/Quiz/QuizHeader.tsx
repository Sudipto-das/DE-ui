import React from 'react';

interface QuizHeaderProps {
    heading: string;
    subheading: string;
    display: boolean;
    onClick?: () => void;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({ heading, subheading, display,onClick }) => {
    return (
        <div className="w-full bg-[#26535b] text-white px-4 py-6 flex justify-between items-center mt-5 rounded-lg">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold font-inter bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent ">
                    {heading}
                </h1>
                <p className="text-lg font-inter bg-gradient-to-r from-purple-200 to-yellow-400 bg-clip-text text-transparent">
                    {subheading}
                </p>
            </div>
            <button
                className={`flex items-center px-4 py-2 rounded-full shadow-md ${display ? 'bg-[#f3f35f] text-black cursor-pointer' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
                disabled={!display}
                onClick={onClick}
            >
                <span className="font-inter text-lg mr-2">Continue</span>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-arrow-right"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12h8" />
                        <path d="m12 16 4-4-4-4" />
                    </svg>
                </span>
            </button>
        </div>
    );
};
