// productCard.tsx
import React from 'react';
import { cartItem, cartItemState } from '../../store/rawMaterailState/cartItemState';
import { constructionProducts } from '../../common/constructionProducts';
import { interiorProducts } from '../../common/interiorProducts';
import { useSetRecoilState } from 'recoil';
interface ProductCardProps {
    id: string
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
}
const products = [...interiorProducts, ...constructionProducts]
const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, rating, image }) => {

    const setCartItem = useSetRecoilState(cartItemState)
    const handleAddToCart = (productId: string) => {
        const addedProduct = products.find((item) => item.id === productId)
        alert('added to Cart')
        if (addedProduct) {
            setCartItem((prevCartItems) => {
                const existingCartItem = prevCartItems?.find(item => item.id === productId);

                if (existingCartItem) {
                    // If the item is already in the cart, increase its quantity
                    return prevCartItems?.map(item =>
                        item.id === productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ) as cartItem[]; // Cast the result to the correct type
                } else {
                    // If the item is not in the cart, add it with a quantity of 1
                    const newCartItem: cartItem = {
                        ...addedProduct,
                        quantity: 1,

                    };
                    return [...(prevCartItems || []), newCartItem];
                }
            });
        }

    }

    return (
        <div className='p-4 border rounded-lg mb-4 md:w-64 2xl:w-72 w-full max-h-96'>
            <img src={image} alt={name} className='w-full h-48 object-cover rounded-lg mb-4' />
            <h2 className='text-lg font-bold text-slate-700'>{name}</h2>
            <p className='text-sm text-slate-500'>{description}</p>
            <p className='text-md font-semibold text-slate-700'>${price}</p>
            <div className='text-yellow-500'>
                {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
            </div>
            <div className='flex gap-4'>
                <button className='px-3 py-1 rounded-md  bg-green-700 text-white' onClick={() => handleAddToCart(id)}>Add To Cart</button>
                <button className='px-3 py-1 rounded-md border'>View</button>
            </div>
        </div>
    );
}

export default ProductCard;
