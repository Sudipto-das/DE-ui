import { useState } from 'react';

const PaymentMethodComponent = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('card');

  const handlePayment = () => {
    // Logic for handling payment processing
    console.log(`Processing payment with ${selectedMethod}`);
  };

  return (
    <div className="p-6">
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

      <div className="mt-8">
        <button
          className="w-1/4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodComponent;