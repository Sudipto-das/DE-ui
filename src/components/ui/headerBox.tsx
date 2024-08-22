import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderBoxProps {
    title: string;
    subtitle: string | number | undefined;
    icon: string;
}

const HeaderBox: React.FC<HeaderBoxProps> = ({ title, subtitle, icon }) => {
    const navigate = useNavigate()
    const handleClick = (title: string) => {
        navigate(`/${title}`)
    }
    return (
        <div onClick={() => handleClick(title.toLowerCase().replace(/\s+/g, ''))} className="flex justify-between items-center border rounded-lg px-4 py-4 md:w-[25%] transition-all duration-300 bg-gradient-to-r from-gray-100 to-gray-300
        hover:cursor-pointer ">
            <div>
                <p className="text-sm font-medium">{title}</p>
                <h1 className="text-2xl text-[#23262F]">{subtitle}</h1>
            </div>
            <img src={icon} className="w-10 h-10" />
        </div>
    );
};

export default HeaderBox;
