import React from 'react';
import SearchBox from '../../common/search';

const Navbar: React.FC = () => {
    return (
        <div className="border-b border-gray-300 p-4 flex justify-between items-center w-full">
            <div className="w-3/5 flex"> 
                <SearchBox />
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="text-white px-4 py-2 rounded-[0.7rem] font-semibold"
                    style={{
                        background: 'linear-gradient(to right,  #113ea5,#479E82)',
                    }}
                >
                    Create +
                </button>
                <div className="flex items-center gap-8 ml-4 ">
                    <img
                        src="Vector.png"
                        alt="Vector"
                        className="w-7 h-7 ml-4"
                    />
                    <div className="relative">
                        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                        <button className="text-gray-600 hover:text-gray-800">
                            <img
                                src="notification.png"
                                alt="Vector"
                                className="w-7 h-7 ml-4"
                            />
                        </button>
                    </div>
                    <img
                        src="Avatar.png"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full ml-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
