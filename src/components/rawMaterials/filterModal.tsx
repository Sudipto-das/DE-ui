import React, { useState } from 'react';
import { products } from '../../common/product';

interface FilterModalProps {
    isOpen: boolean;
    onClose: (selectedFilters: { categories: string[]; priceRange: string[] }) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);

    if (!isOpen) return null;

    // Extract unique categories from products
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const priceRange = ['0 - 10', '11 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', '61 - 70', '71 - 80', '91 - 100'];

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prevSelectedCategories =>
            prevSelectedCategories.includes(category)
                ? prevSelectedCategories.filter(cat => cat !== category)
                : [...prevSelectedCategories, category]
        );
    };

    const handlePriceChange = (price: string) => {
        setSelectedPriceRange(prevSelectedPrice =>
            prevSelectedPrice.includes(price)
                ? prevSelectedPrice.filter(item => item !== price)
                : [...prevSelectedPrice, price]
        );
    };

    const handleClose = () => {
        onClose({ categories: selectedCategories, priceRange: selectedPriceRange });
    };
    const isFilterSelected = selectedCategories.length > 0 || selectedPriceRange.length > 0;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end items-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-72">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-violet-500 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter text-white">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold">Filter</h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className={`py-1 px-3 rounded-lg text-white font-semibold transition-all ${
                            isFilterSelected
                                ? 'bg-violet-500 hover:bg-violet-600'
                                : 'bg-gray-500 hover:bg-gray-600'
                        }`}
                    >
                        {isFilterSelected ? 'Apply' : 'Close'}
                    </button>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2">
                        {uniqueCategories.map((category, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id={`category-${index}`}
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    className="form-checkbox h-5 w-5 text-violet-500 rounded"
                                    onChange={() => handleCategoryChange(category)}
                                />
                                <label htmlFor={`category-${index}`} className="text-gray-700">{category}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                    <ul className="space-y-2">
                        {priceRange.map((range, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id={`price-${index}`}
                                    value={range}
                                    checked={selectedPriceRange.includes(range)}
                                    className="form-checkbox h-5 w-5 text-violet-500 rounded"
                                    onChange={() => handlePriceChange(range)}
                                />
                                <label htmlFor={`price-${index}`} className="text-gray-700">{range}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FilterModal;
