import React from 'react';
import NavItem from './navItem';

const Sidebar: React.FC = () => {
    const navItems = [
        { icon: 'category.png', name: 'Dashboard' },
        { icon: 'profile-circle.png', name: 'Profile' },
        { icon: 'briefcase.png', name: 'Project' },
        { icon: 'category.png', name: 'Inspirations' },
        { icon: 'noun-repair-5012041 1.png', name: 'Production & Installation' },
        { icon: 'noun-board-4408731 1.png', name: 'Raw materials' },
        { icon: 'noun-finance-6505435 1.png', name: 'Finance your project' },
        { icon: 'paperclip-2.png', name: 'Updates' },
        { icon: 'message-question.png', name: 'Help & Support' },
    ];
    return (
        <div className="bg-white h-screen w-80 shadow-md flex flex-col">
            {/* Logo Section */}
            <div className="p-4 flex items-center mt-2">
                <img
                    src="LOGO.png" // Replace with your logo path
                    alt="Design Elementary"
                    className="h-8 mr-3"
                />
                <span className="font-semibold text-lg">Design Elementary</span>
            </div>
            {/* User Profile Section */}
            <div className='bg-[#F4F5F6] m-4 rounded-md'>
                <div className="p-4 flex items-center gap-2">
                    <img
                        src="Avatar.png"
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full mb-2"
                    />
                    <div className='flex flex-col items-center'>
                        <span className="font-medium text-sm">Nguyen Duy Phuoc</span>
                        <span className="text-gray-500 text-xs">Designer</span>
                    </div>
                </div>
            </div>
            {/* Navigation Items */}
            <nav className="flex-grow">
                <ul>
                    {navItems.map((item, index) => (
                        <NavItem key={index} icon={item.icon} name={item.name} />
                    ))}
                </ul>
            </nav>

        </div>
    );
};

export default Sidebar;
