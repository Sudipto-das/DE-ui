import { useRecoilState } from "recoil";
import { selectedCategoryState } from "../../store/selectCatagoryState";
import { useState } from "react";

const InspirationsHeader: React.FC<{ renderComponent: React.ReactNode }> = ({ renderComponent }) => {
    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        { name: 'Interior', img: 'interior-design.png' },
        { name: 'Architecture', img: 'architecture.png' },
        { name: 'Saved Designs', img: 'save.png' },
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
        <div className="flex gap-2 flex-col md:flex-row font-inter">
            {categories.filter(category => category.name && category.img).map((category) => (
                <div key={category.name} className="w-full md:w-1/4">
                    <div
                        className={`flex justify-between items-center border rounded-lg px-4 py-5 cursor-pointer
                        transition-all duration-300
                        ${selectedCategory === category.name
                            ? 'bg-gradient-to-r from-[#2d9468] to-[#1ae38b] text-white'
                            : 'bg-gradient-to-r from-gray-100 to-gray-300'
                        }`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <div>
                            <h1 className="text-xl font-semibold">{category.name}</h1>
                        </div>
                        <img src={category.img} className="w-10 h-10" alt={category.name} />
                    </div>
                    {isOpen && selectedCategory === category.name && (
                        <div className="block md:hidden">
                            {renderComponent}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default InspirationsHeader;
