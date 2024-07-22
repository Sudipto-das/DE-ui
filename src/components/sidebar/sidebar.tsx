import React, { useState } from 'react';
import NavItem from './navItem';
import UserProfile from './userProfile';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { icon: 'sidebar/dashboards.png', name: 'Dashboard' },
        { icon: 'sidebar/account.png', name: 'Profile' },
        { icon: 'sidebar/briefcase.png', name: `Projects` },
        { icon: 'sidebar/dashboards.png', name: 'Inspirations' },
        { icon: 'sidebar/customer-support.png', name: 'Production & Installation' },
        { icon: 'sidebar/steel.png', name: 'Raw materials' },
        { icon: 'sidebar/dollar.png', name: 'Finance your project' },
        { icon: 'sidebar/attachment.png', name: 'Updates' },
        { icon: 'sidebar/communications.png', name: 'Help & Support' },
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Toggle Button */}
            <button
                onClick={handleToggle}
                className="md:hidden p-2 fixed top-4 left-4 bg-gray-700 text-white rounded-lg z-50 "
            >
                {isOpen ? <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minimize-2"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/></svg></div> 
                : <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg></div>}
            </button>

            {/* Sidebar */}
            <div
                className={`bg-white h-screen shadow-md flex flex-col fixed z-40 md:relative transition-transform transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:w-full`}
            >
                {/* Logo Section */}
                <div className="p-4 flex items-center mt-2">
                    <img
                        src="/LOGO.png" 
                        alt="Design Elementary"
                        className="h-8 mr-3"
                    />
                    <span className="font-semibold text-lg">Design Elementary</span>
                </div>
                {/* User Profile Section */}
                <UserProfile/>
                {/* Navigation Items */}
                <nav className="flex-grow">
                    <ul>
                        {navItems.map((item, index) => (
                            <NavItem key={index} icon={item.icon} name={item.name} onClick={handleToggle}/>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
