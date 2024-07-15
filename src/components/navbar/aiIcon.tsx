import React from 'react';

const AiIcon: React.FC = () => {


    return (
        <button className="flex items-center ml-4">
            <img
                src="sparkling.png"
                className="w-9 h-9 animate-spin"
                alt="Sparkling Icon"
            />
            <span className="text-blue-600 font-bold text-lg">AI</span>
        </button>
    );
};

export default AiIcon;
