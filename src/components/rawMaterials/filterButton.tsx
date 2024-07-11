// FilterButton.tsx
import React from 'react';

interface FilterButtonProps {
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className='text-blue-500 hover:underline text-sm flex gap-1'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
            </div>
            FILTER
        </button>
    );
}

export default FilterButton;
