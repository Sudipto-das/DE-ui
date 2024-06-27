import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedCategoryState } from '../../store/selectCatagoryState';



const ProductionHeader: React.FC<{ renderComponent: React.ReactNode }> = ({ renderComponent }) => {
    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
    const [isOpen,setIsOpen] = useState(false)
    
    const categories = [
        { name: 'Factories', img: 'Frame 919.png' },
        { name: 'False ceiling', img: 'Frame 920.png' },
        { name: 'Painting', img: 'Frame 918.png' },
        { name: 'Loose Furniture', img: 'Frame 917.png' },
    ];
    const handleCategoryClick = (categoryName: string) => {
        if (selectedCategory === categoryName) {
            setIsOpen(!isOpen);
        } else {
            setSelectedCategory(categoryName);
            setIsOpen(true);
        }
    };

    return (
        <div className="flex gap-2 flex-col md:flex-row">
            {categories.map((category) => (
                <div key={category.name} className="w-full md:w-1/4">
                    <div
                        className={`flex justify-between items-center border rounded-lg px-4 py-5 cursor-pointer ${
                            selectedCategory === category.name ? 'bg-gray-200' : ''
                        }`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <div>
                            <h1 className="text-xl text-[#23262F] font-medium">{category.name}</h1>
                        </div>
                        <img src={category.img} className="w-10 h-10" alt={category.name} />
                    </div>
                    {/* Render component for mobile screens only */}
                    {isOpen && selectedCategory === category.name && (
                        <div className="block md:hidden">
                            {renderComponent}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductionHeader;
