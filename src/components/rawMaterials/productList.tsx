import React from 'react';
import ProductCard from './productCard';
import { product } from '../../store/rawMaterailState/productState';


interface ProductListProps {
    products: product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {


    return (
        <div className='p-3 border rounded-lg h-[36rem] 2xl:h-[51rem]'>
            
            <div className="flex flex-wrap justify-start gap-4 overflow-y-auto h-[95%]">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
            
        </div>
    );
};

export default ProductList;
