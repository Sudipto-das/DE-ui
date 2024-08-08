import React from 'react';
import { AppContext } from '../../context/Context';

const ProfileModal: React.FC = () => {
    const { Logout } = React.useContext(AppContext);
    return (
        <div className="absolute right-5 mt-5 w-48 bg-slate-50 rounded-lg shadow-lg z-50">
            <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                    <img
                        src="/Avatar.png"
                        alt="Profile Icon"
                        className="w-6 h-6 rounded-full"
                    />
                    <span>Profile</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2" onClick={Logout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    );
};

export default ProfileModal;
