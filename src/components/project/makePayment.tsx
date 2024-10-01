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

    const budget = parseFloat(formData.budget);
    const discountPercentage = 10; // 10% discount
    const initialPaymentPercentage = 3; // 3% initial payment

    // Calculate the discounted budget
    const discountedBudget = Number(formData.budget) - (Number(formData.budget) * discountPercentage) / 100;

    // Calculate the initial payment (3% of the discounted budget)
    const initialPayment = (discountedBudget * initialPaymentPercentage) / 100;

    const handlePayment = () => {
        console.log(`Processing payment for project with data:`, formData);
        console.log(`Total Budget: $${budget}, Discounted Budget: $${discountedBudget}, Initial Payment: $${initialPayment}`);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
            <motion.div
                className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6 sm:p-8 h-auto max-h-screen overflow-y-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-lg font-semibold mb-4 text-center">Payment Method</h2>

                {/* Display estimated budget with discount */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
                    <p className="text-green-600">Estimated Budget: <span className="font-semibold">₹{budget.toFixed(2)}</span></p>
                    <p className="text-green-600">
                        Discounted Budget (10% Off):
                        <motion.span
                            className="font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 bg-clip-text text-transparent"
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                            exit={{ scale: 1, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            ₹{discountedBudget.toFixed(2)}
                        </motion.span>
                    </p>
                </div>

                {/* Payment Method Selection */}
                <div className={`p-4 border ${selectedMethod === 'card' ? 'border-green-500' : 'border-gray-300'} rounded-lg mb-4`}>
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

                            <div className="grid grid-cols-2 gap-2 sm:gap-4">
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
                <div className="space-y-4 mt-4">
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="w-8 sm:w-10" />
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
                        <img src="/6124998.png" alt="Google Pay" className="w-12 sm:w-14" />
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="w-8 sm:w-10" />
                    </label>
                </div>

                {/* Payment and action buttons */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
                    <button
                        className="text-gray-500 px-4 py-2 transition duration-150 mb-4 sm:mb-0"
                        onClick={closePayment}
                    >
                        Cancel
                    </button>

                    <div className="flex items-center space-x-4">
                        {/* Initial payment information */}
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Initial Payment:</p>
                            <p className="text-lg font-semibold text-green-600">₹{initialPayment.toFixed(2)}</p>
                        </div>

                        <button
                            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors"
                            onClick={handlePayment}
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default MakePayment;
