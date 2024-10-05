import React from 'react';
import { useNavigate } from 'react-router-dom';

const AiIcon: React.FC = () => {
const navigate = useNavigate()

    return (
        <button className="flex items-center ml-4" onClick={()=>navigate('/design-ai')}>
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
