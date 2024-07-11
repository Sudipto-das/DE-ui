// productList.tsx
import React, { useState } from 'react';
import ProductCard from './productCard';
import FilterModal from './filter';
import {products} from '../../common/product'



const ProductList: React.FC = () => {
    const [isOpen,setIsOpen] =useState(false)
    const openFilterModal = () => {
        setIsOpen(true);
    };

    const closeFilterModal = () => {
        setIsOpen(false);
    };
    return (
        <div className='p-3 border rounded-lg h-[51rem]'>
        <div className='flex justify-between items-center mb-2'>
            <h1 className='text-xl font-bold text-slate-600'>Raw Materials</h1>
            <button onClick={openFilterModal} className='text-blue-500 hover:underline text-sm flex gap-1'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                </div>
                FILTER
            </button>
        </div>
        <div className="flex flex-wrap justify-start gap-4 overflow-y-auto h-[95%]">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
        <FilterModal isOpen={isOpen} onClose={closeFilterModal} />
    </div>
    );
}

export default ProductList;
