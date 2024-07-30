import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="fixed top-10 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm">
            <div className="animate-pulse rounded-full h-12 w-12 z-10 border-4 border-green-500"></div>
        </div>
    );
};

export default Loader;
