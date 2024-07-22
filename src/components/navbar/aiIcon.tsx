import React from 'react';

const AiIcon: React.FC = () => {


    return (
        <button className="flex items-center ml-4">
            <img
                src="/sparkling.png"
                className="w-7 h-7 animate-spin"
                alt="Sparkling Icon"
            />
            <span className="text-violet-600 font-extrabold text-lg">AI</span>
        </button>
    );
};

export default AiIcon;
