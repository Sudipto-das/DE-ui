import React from 'react';

interface FactoryCardProps {
    image: string;
    title: string;
    discount: string;
    rating: number;
    budget: string;
    duration: string;
    size: string;
}

const FactoryCard: React.FC<FactoryCardProps> = ({ image, title, discount, rating, budget, duration, size }) => {
    return (
        <div className="flex bg-white border shadow-sm rounded-lg overflow-hidden mb-4 items-center px-3">
            <div className="relative w-32 h-32">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1">
                    {discount} Off
                </div>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-lg font-semibold mb-1">{title}</h3>
                    <div className='flex justify-between'>
                        <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 h-4 fill-current ${i < rating ? 'text-green-500' : 'text-gray-300'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.973 1.432 8.297L12 18.896l-7.368 4.68L6.064 15.28 0 9.308l8.332-1.151L12 .587z" />
                                </svg>
                            ))}
                        </div>
                        <div className="flex gap-5">
                            <button className=" text-[#005B3E] px-3 rounded-lg mr-2 border border-[#005B3E] hover:bg-green-200">View Quote</button>
                            <button className="bg-[#005B3E] text-white px-4 rounded-lg hover:bg-green-600">Book</button>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-600 mb-2 flex items-center gap-1"><img src="moneys.png" alt="" className='w-4 h-4'/>Project Budget: {budget}</div>
                        <div className='flex gap-20'>
                            <div className="text-sm text-gray-600 mb-2 flex items-center gap-1"> <img src="calendar.png" alt="" className='w-4 h-4'/>Duration: {duration}</div>
                            <div className="text-sm text-gray-600 flex items-center gap-1"> <img src="size.png" alt="" className='w-4 h-4'/>Size/Room: {size}</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FactoryCard;
