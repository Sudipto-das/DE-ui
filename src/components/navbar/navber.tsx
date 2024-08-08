import React, { useState } from 'react';
import SearchBox from '../ui/search';
import AiIcon from './aiIcon';
import { useNavigate } from 'react-router-dom';
import ProfileModal from './profileModal';


const Navbar: React.FC = () => {
    
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const navigate = useNavigate()
    const toggleProfileModal = () => {
        setIsProfileModalOpen(prevState => !prevState);
    };
    const handleClick = () => {
        navigate('/updates')
    }
    return (
        <div className="p-4 flex justify-between items-center w-full flex-col md:flex-row font-inter">
            <div className="w-[85%] flex ml-10 md:w-3/5">
                <SearchBox />
            </div>
            <div className="flex items-center gap-4 mt-2 ">
                <button
                    className="text-white px-4 py-2 rounded-[0.7rem] font-semibold text-xs md:text-sm"
                    style={{
                        background: 'linear-gradient(to right,  #113ea5,#479E82)',
                    }}
                >
                    Create +
                </button>
                <div className="flex items-center gap-8 ml-4 ">
                    <AiIcon />
                    <div className="relative">
                        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                        <button className="text-gray-600 hover:text-gray-800 " onClick={handleClick}>
                            <img
                                src="/notification.png"
                                alt="Vector"
                                className="w-7 h-7 ml-4"
                            />
                        </button>
                    </div>
                    <div className='flex gap-2 items-center rounded-md justify-between bg-slate-100 p-1'>
                        <img
                            src="/Avatar.png"
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full "
                        />
                        <button onClick={toggleProfileModal}>
                            {!isProfileModalOpen ? <svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-down">
                                <path d="m6 9 6 6 6-6" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-up">
                                <path d="m18 15-6-6-6 6" />
                            </svg>}
                            {isProfileModalOpen && <ProfileModal />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
