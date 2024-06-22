import React from 'react';

interface NavItemProps {
  icon: string;
  name: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, name }) => {
  return (
    <li className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg m-2">
      <img src={`${icon}`} alt={name} className="w-6 h-6 mr-4" />
      <span>{name}</span>
    </li>
  );
};

export default NavItem;
