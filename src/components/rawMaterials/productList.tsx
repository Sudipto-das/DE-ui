import React, { useState } from 'react';
import ProductCard from './productCard';
import FilterModal from './filterModal';
import FilterButton from './filterButton';
import { product } from '../../common/product';

interface productListProps {
    products: product[];
}

const ProductList: React.FC<productListProps> = ({ products }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<product[]>(products);

    const openFilterModal = () => {
        setIsOpen(true);
    };

    const closeFilterModal = (selectedFilters: { categories: string[]; priceRange: string[] }) => {
        setIsOpen(false);

        // Filter products based on selected filters
        const filtered = products.filter((product) => {
            const inCategory = selectedFilters.categories.length === 0 || selectedFilters.categories.includes(product.category);
            const inPriceRange = selectedFilters.priceRange.length === 0 || selectedFilters.priceRange.some(range => {
                const [min, max] = range.split(' - ').map(Number);
                return Number(product.price)>= min && Number(product.price) <= max;
            });
            

            return inCategory && inPriceRange;
        });
        

        setFilteredProducts(filtered);
    };

    return (
        <div className='p-3 border rounded-lg h-[51rem]'>
            <div className='flex justify-between items-center mb-2'>
                <h1 className='text-xl font-bold text-slate-600'>Raw Materials</h1>
                <FilterButton onClick={openFilterModal} />
            </div>
            <div className="flex flex-wrap justify-start gap-4 overflow-y-auto h-[95%]">
                {filteredProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
            <FilterModal isOpen={isOpen} onClose={closeFilterModal} />
        </div>
    );
}

export default ProductList;
