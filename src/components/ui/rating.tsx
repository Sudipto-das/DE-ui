import React from 'react';

interface RatingProps {
    rating:number|undefined
}

const Rating:React.FC<RatingProps> = ({ rating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 fill-current ${rating && i < rating ? 'text-green-500' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.973 1.432 8.297L12 18.896l-7.368 4.68L6.064 15.28 0 9.308l8.332-1.151L12 .587z" />
                </svg>
            ))}
        </div>
    );
}

export default Rating;
