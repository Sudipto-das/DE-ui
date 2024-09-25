import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartItemState } from '../../store/rawMaterailState/cartItemState';

const CartPage: React.FC = () => {
    const cartItems = useRecoilValue(cartItemState);
    const navigate = useNavigate();

    const cartData = {
        totalItems: cartItems.reduce((acc, item) => acc + (item.quantity ?? 1), 0),
        subtotal: cartItems.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0),
        shippingCost: 10, // example value
        tax: 5, // example value
        total: cartItems.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0) + 10 + 5, // example calculation
        promotionCode: 'SAVE20',
        promotionDiscount: 20,
        grandTotal: cartItems.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0) - 20 + 10 + 5, // example calculation
    };

    return (
        <div className="w-full  bg-gray-50 p-6 md:p-8 lg:p-10">
            <div className="">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="flex items-center justify-center text-xl font-semibold text-gray-600 h-64">
                        Your Cart is Empty
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="overflow-y-auto h-[30rem] md:h-[35rem]">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-start mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h2>
                                        <p className="text-gray-600 mb-3">{item.description}</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-semibold text-gray-800">Price: ${item.price.toFixed(2)}</p>
                                            <p className="text-lg font-semibold text-gray-800">Qty: {item.quantity}</p>
                                            <button className="text-red-500 hover:text-red-700">
                                                <img src="delete.png" width={20} alt="Delete" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between text-lg text-gray-700">
                                    <span>Total Items:</span>
                                    <span>{cartData.totalItems}</span>
                                </div>
                                <div className="flex justify-between text-lg text-gray-700">
                                    <span>Subtotal:</span>
                                    <span>${cartData.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg text-gray-700">
                                    <span>Shipping Cost:</span>
                                    <span>${cartData.shippingCost.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg text-gray-700">
                                    <span>Tax:</span>
                                    <span>${cartData.tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg text-gray-800 font-semibold">
                                    <span>Total:</span>
                                    <span>${cartData.total.toFixed(2)}</span>
                                </div>
                                {cartData.promotionCode && (
                                    <div className="flex justify-between text-lg text-green-600 font-semibold">
                                        <span>Promo ({cartData.promotionCode}):</span>
                                        <span>- ${cartData.promotionDiscount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-xl text-gray-800 font-bold">
                                    <span>Grand Total:</span>
                                    <span>${cartData.grandTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 rounded-lg mt-6 w-full transition-colors duration-300"
                                onClick={() => navigate('/raw-materials/checkout')}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;