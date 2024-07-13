import React, { useState } from 'react';
import ProductCard from './productCard';
import FilterModal from './filterModal';
import FilterButton from './filterButton';
import CartModal from './cartModal'; // Import CartModal
import { product } from '../../common/product';
import { cartItems } from '../../common/cartItem';
interface productListProps {
    products: product[];
}

const ProductList: React.FC<productListProps> = ({ products }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<product[]>(products);
    const [isCartOpen, setIsCartOpen] = useState(false);
  

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
                return Number(product.price) >= min && Number(product.price) <= max;
            });

            return inCategory && inPriceRange;
        });

        setFilteredProducts(filtered);
    };

    const openCartModal = () => {
        setIsCartOpen(true);
    };

    const closeCartModal = () => {
        setIsCartOpen(false);
    };

    return (
        <div className='p-3 border rounded-lg h-[36rem] 2xl:h-[51rem]'>
            <div className='flex justify-between items-center mb-2'>
                <h1 className='text-xl font-bold text-slate-600'>Raw Materials</h1>
                <div className='flex gap-4 items-center'>
                    <FilterButton onClick={openFilterModal} />
                    <div className='mr-4'>
                        <img src="shopping-cart.png" alt="" width={32} onClick={openCartModal} />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-start gap-4 overflow-y-auto h-[95%]">
                {filteredProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
            <FilterModal isOpen={isOpen} onClose={closeFilterModal} />
            <CartModal isOpen={isCartOpen} onClose={closeCartModal} cartItems={cartItems} />
        </div>
    );
}

export default ProductList;
