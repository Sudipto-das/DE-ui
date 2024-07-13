import React from 'react';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: any[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems }) => {
    if (!isOpen) return null;

    const cartData = {
        totalItems: cartItems.reduce((acc, item) => acc + (item.quantity ?? 1), 0),
        subtotal: cartItems.reduce((acc, item) => acc + item.price * (item ?? 1), 0),
        shippingCost: 10, // example value
        tax: 5, // example value
        total: cartItems.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0) + 15, // example calculation
        promotionCode: 'SAVE20',
        promotionDiscount: 20,
        grandTotal: cartItems.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0) - 20 + 15, // example calculation
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-[75%] md:mr-12">
                <div className="container mx-auto p-8 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-3 rounded"
                    >
                        Close
                    </button>
                    <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                    {cartItems.length === 0 && (
                        <div className='flex items-center justify-center font-bold text-lg'>Cart is Empty</div>
                    )}
                    {cartItems.length > 0 && (

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[30rem] 2xl:h-[38rem]">
                            <div className="overflow-y-auto h-[95%]">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center mb-8 p-4 bg-white rounded-lg shadow">
                                        <img src={item.image} alt={item.title} className="w-24 h-24 object-cover mr-6" />
                                        <div>
                                            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                            <p className="text-gray-600 mb-2">{item.description}</p>

                                            <div className="flex items-center gap-3">
                                                <p className="text-gray-800 font-semibold">Price: ${item.price}</p>
                                                <p className="text-gray-800 font-semibold">Quantity: {item.quantity}</p>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <img src="delete.png" width={18} alt="" />
                                                </button>


                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                                <div className="space-y-2">
                                    <p className="text-gray-700">Total Items: {cartData.totalItems}</p>
                                    <p className="text-gray-700">Subtotal: ${cartData.subtotal.toFixed(2)}</p>
                                    <p className="text-gray-700">Shipping Cost: ${cartData.shippingCost.toFixed(2)}</p>
                                    <p className="text-gray-700">Tax: ${cartData.tax.toFixed(2)}</p>
                                    <p className="text-gray-700 font-semibold">Total: ${cartData.total.toFixed(2)}</p>
                                    {cartData.promotionCode && (
                                        <p className="text-gray-700">Promotion Code: {cartData.promotionCode}</p>
                                    )}
                                    {cartData.promotionDiscount > 0 && (
                                        <p className="text-green-600 font-semibold">Promotion Discount: -${cartData.promotionDiscount.toFixed(2)}</p>
                                    )}
                                    <p className="text-2xl font-bold">Grand Total: ${cartData.grandTotal.toFixed(2)}</p>
                                </div>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 w-full">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartModal;
