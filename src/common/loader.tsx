import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-100">
            <div className="animate-pulse rounded-full h-12 w-12 border-4 border-green-500"></div>
        </div>
    );
};

export default Loader;
