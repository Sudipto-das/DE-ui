import React from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedCategoryState } from '../../store/selectCatagoryState';
import Rating from '../../common/rating';



interface FactoryCardProps {
    image: string;
    title: string;
    discount: string;
    rating: number;
    budget: string;
    duration: string;
    size: string;
}

const ItemCard: React.FC<FactoryCardProps> = ({ image, title, discount, rating, budget, duration, size }) => {
    const setSelectedCatagory = useSetRecoilState(selectedCategoryState)
    const handleClick = () =>{
        setSelectedCatagory('book-button')
    }
    return (
        <div className="flex flex-col md:flex-row bg-white border shadow-sm rounded-lg overflow-hidden mb-4 md:items-center md:px-2">
            <div className="relative w-full md:w-32 h-32">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1">
                    {discount} Off
                </div>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-lg font-semibold mb-1">{title}</h3>
                    <div className="flex justify-between items-center mb-2">
                        <Rating rating={rating}/>
                        <div className="flex gap-2">
                            <button className="text-[#005B3E] px-3 py-1 rounded-lg border border-[#005B3E] hover:bg-green-200">View Quote</button>
                            <button className="bg-[#005B3E] text-white px-4 py-1 rounded-lg hover:bg-green-600" onClick={handleClick}>Book</button>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                            <img src="moneys.png" alt="" className="w-4 h-4" /> Project Budget: {budget}
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-20">
                            <div className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                                <img src="calendar.png" alt="" className="w-4 h-4" /> Duration: {duration}
                            </div>
                            <div className="text-sm text-gray-600 flex items-center gap-1">
                                <img src="size.png" alt="" className="w-4 h-4" /> Size/Room: {size}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
