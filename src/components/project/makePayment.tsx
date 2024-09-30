import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MakePaymentProps {
    formData: {
        title: string;
        description: string;
        budget: string;
        size: string;
        Type: string;
    };
    closePayment: () => void;
}

const MakePayment: React.FC<MakePaymentProps> = ({ formData, closePayment }) => {
    const [selectedMethod, setSelectedMethod] = useState<string>('card');

    const handlePayment = () => {
        // Logic for handling payment processing
        console.log(`Processing payment for project with data:`, formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
                className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-lg font-semibold mb-4">Payment method</h2>

                <div className={`p-4 border ${selectedMethod === 'card' ? 'border-green-500' : 'border-gray-300'} rounded-lg`}>
                    <label className="flex items-center cursor-pointer mb-2">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={selectedMethod === 'card'}
                            onChange={() => setSelectedMethod('card')}
                            className="form-radio text-green-600 mr-2"
                        />
                        <span className="text-base font-medium">Credit or Debit Card</span>
                    </label>

                    {selectedMethod === 'card' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name on Card</label>
                                <input
                                    type="text"
                                    placeholder="Jacob Francize"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Card Number</label>
                                <input
                                    type="text"
                                    placeholder="8645 5244 5352 4233"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Expire Date (MM/YY)</label>
                                    <input
                                        type="text"
                                        placeholder="08/32"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">CVC/CVV</label>
                                    <input
                                        type="text"
                                        placeholder="556"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="saveCard"
                                    className="form-checkbox text-green-600"
                                />
                                <label htmlFor="saveCard" className="ml-2 text-sm font-medium">Save this card</label>
                            </div>
                        </div>
                    )}
                </div>

                {/* Additional payment options */}
                <div className="space-y-4 mt-6">
                    <label className={`flex items-center cursor-pointer p-4 border ${selectedMethod === 'paypal' ? 'border-green-500' : 'border-gray-300'} rounded-lg`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={selectedMethod === 'paypal'}
                            onChange={() => setSelectedMethod('paypal')}
                            className="form-radio text-green-600 mr-2"
                        />
                        <span className="text-base font-medium flex-1">PayPal</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="w-8" />
                    </label>

                    <label className={`flex items-center cursor-pointer p-4 border ${selectedMethod === 'googlepay' ? 'border-green-500' : 'border-gray-300'} rounded-lg`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="googlepay"
                            checked={selectedMethod === 'googlepay'}
                            onChange={() => setSelectedMethod('googlepay')}
                            className="form-radio text-green-600 mr-2"
                        />
                        <span className="text-base font-medium flex-1">Google Pay</span>
                        <img src="/6124998.png" alt="Google Pay" className="w-12" />
                    </label>

                    <label className={`flex items-center cursor-pointer p-4 border ${selectedMethod === 'applepay' ? 'border-green-500' : 'border-gray-300'} rounded-lg`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="applepay"
                            checked={selectedMethod === 'applepay'}
                            onChange={() => setSelectedMethod('applepay')}
                            className="form-radio text-green-600 mr-2"
                        />
                        <span className="text-base font-medium flex-1">Apple Pay</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="w-8" />
                    </label>
                </div>

                <div className="mt-8 flex justify-between">
                    <button
                        className="text-gray-500 px-4 py-2 transition duration-150"
                        onClick={closePayment}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors"
                        onClick={handlePayment}
                    >
                        Pay Now
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default MakePayment;
