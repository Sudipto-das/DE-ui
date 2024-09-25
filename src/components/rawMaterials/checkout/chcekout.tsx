import { useState } from 'react';
import { IoChevronBackCircleOutline } from "react-icons/io5";

import AddressForm from "./addressForm";

import { useNavigate } from 'react-router-dom';
import PaymentMethodComponent from './paymentMethod';
import OrderSummary from './orderSummary';

// Demo address array
const addresses = [
  {
    id: 1,
    firstName: 'Subhankar',
    lastName: 'Nandi',
    streetAddress: '3891 Ranchview',
    state: 'Maharashtra',
    zipCode: '62639',
  },
  {
    id: 2,
    firstName: 'Subhankar',
    lastName: 'Nandi',
    streetAddress: '4140 Parker Rd. Allentown',
    state: 'Karnataka',
    zipCode: '31134',
  },
];

const CheckoutComponent = () => {
  const [step, setStep] = useState('address');
  const navigate = useNavigate()

  const handleNextStep = () => {
    setStep('payment');
  };


  return (
    <div className="flex">
      <div className="w-[60%]">
        <button className="text-xs text-blue-600 flex items-center gap-1 justify-center text-center py-2 px-4 rounded-md hover:bg-blue-50 transition-colors">
          <IoChevronBackCircleOutline size={20} />
          <span className="mt-0.5" onClick={()=>{navigate('/raw-materials')}}>Back to cart</span>
        </button>

        {step === 'address' && <AddressForm addresses={addresses} onNext={handleNextStep} />}
        {step === 'payment' && <PaymentMethodComponent />}
      </div>
      <div className="w-[38%]">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutComponent;