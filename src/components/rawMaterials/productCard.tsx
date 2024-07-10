// productCard.tsx
import React from 'react';

interface ProductCardProps {
    name: string;
    description: string;
    price: string;
    rating: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, rating, image }) => {
    return (
        <div className='p-4 border rounded-lg mb-4 md:w-72 w-full'>
            <img src={image} alt={name} className='w-full h-48 object-cover rounded-lg mb-4' />
            <h2 className='text-lg font-bold text-slate-700'>{name}</h2>
            <p className='text-sm text-slate-500'>{description}</p>
            <p className='text-md font-semibold text-slate-700'>{price}</p>
            <div className='text-yellow-500'>
                {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
            </div>
            <div className='flex gap-4'>
                <button className='px-3 py-1 rounded-md  bg-green-700 text-white'>Buy</button>
                <button className='px-3 py-1 rounded-md border'>View</button>
            </div>
        </div>
    );
}

export default ProductCard;
