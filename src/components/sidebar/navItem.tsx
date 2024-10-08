import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
    icon: string;
    name: string;
    onClick: () => void
}

const NavItem: React.FC<NavItemProps> = ({ icon, name, onClick }) => {
    const location = useLocation();
    const path = name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

    const isActive = location.pathname === `/${path}`;

    return (
        <li>
            <Link
                onClick={onClick}
                to={`/${path}`}
                className={`flex items-center p-4 rounded-lg m-2 ${isActive ? 'bg-[#1B454D] text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}
            >
                <img src={`${icon}`} alt={name} className="w-6 h-6 mr-4" />
                <span>{name}</span>
            </Link>
        </li>
    );
};

export default NavItem;
