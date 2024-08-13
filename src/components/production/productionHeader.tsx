import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedCategoryState } from '../../store/selectCatagoryState';

const ProductionHeader: React.FC<{ renderComponent: React.ReactNode }> = ({ renderComponent }) => {
    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
    const [local, setLocal] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        { name: 'Factories', img: 'Frame 919.png' },
        { name: 'False ceiling', img: 'Frame 920.png' },
        { name: 'Painting', img: 'Frame 918.png' },
        { name: 'Loose Furniture', img: 'Frame 917.png' },
    ];

    const handleCategoryClick = (categoryName: string) => {
        if (selectedCategory === categoryName) {
            setLocal(categoryName);
            setIsOpen(!isOpen);
        } else {
            setSelectedCategory(categoryName);
            setIsOpen(true);
        }
    };

    return (
        <div className="flex gap-2 flex-col md:flex-row font-inter">
            {categories.filter(category => category.name && category.img).map((category) => (
                <div key={category.name} className="w-full md:w-1/4">
                    <div
                        className={`flex justify-between items-center border rounded-lg px-4 py-5 cursor-pointer
                        transition-all duration-300
                        ${selectedCategory === category.name
                            ? 'bg-gradient-to-r from-green-600 to-[#c4ed53] text-white'
                            : 'bg-gradient-to-r from-gray-100 to-gray-300'
                        }`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <div>
                            <h1 className="text-xl font-semibold">{category.name}</h1>
                        </div>
                        <img src={category.img} className="w-10 h-10" alt={category.name} />
                    </div>
                    {/* Render component for mobile screens only */}
                    {isOpen && selectedCategory === category.name && (
                        <div className="block md:hidden">
                            {renderComponent}
                        </div>
                    )}
                    {local === category.name && selectedCategory === 'book-button' && isOpen && (
                        <div className="w-full md:w-1/4">
                            <div className="block md:hidden">
                                {renderComponent}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductionHeader;
