import React from "react";

interface HeaderBoxProps {
    title: string;
    subtitle: string|number|undefined;
    icon: string;
}

const HeaderBox: React.FC<HeaderBoxProps> = ({ title, subtitle, icon }) => {
    return (
        <div className="flex justify-between items-center border rounded-lg px-4 py-4 md:w-[25%] hover:cursor-pointer">
            <div>
                <p className="text-sm font-medium">{title}</p>
                <h1 className="text-2xl text-[#23262F]">{subtitle}</h1>
            </div>
            <img src={icon} className="w-10 h-10" />
        </div>
    );
};

export default HeaderBox;
