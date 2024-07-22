import React from 'react';

const SearchBox: React.FC = () => {
    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="Search everything"
                className="px-4 py-3 pr-10 border border-gray-300 rounded-[0.75rem] w-full"
            />
            <button>
                <img
                    src="/Small.png"
                    alt="Search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-7 h-7"
                />
            </button>
        </div>
    );
};

export default SearchBox;
