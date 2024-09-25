import React from 'react';
import { useRecoilState } from 'recoil';
import { addressFormState } from '../../../store/addressFormData';



interface Address {
  id: number;
  firstName: string;
  lastName: string;
  streetAddress: string;
  state: string;
  zipCode: string;
}

interface AddressFormProps {
  addresses: Address[];
  onNext: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ addresses, onNext }) => {
  const [selectedAddressId, setSelectedAddressId] = React.useState<number | null>(null);
  const [formData, setFormData] = useRecoilState(addressFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressSelect = (address: Address) => {
    setSelectedAddressId(address.id);
    setFormData(address);
  };

  const handleFormSubmit = () => {
    if (selectedAddressId !== null) {
      console.log('Selected Address Data:', formData);
    } else {
      console.log('New Address Data:', formData);
    }
    onNext(); // Move to the next step
  };
console.log(formData)
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>

      {addresses.map((address) => (
        <div key={address.id} className="mb-4 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <label className="block cursor-pointer">
            <input
              type="radio"
              name="address"
              value={address.id}
              checked={selectedAddressId === address.id}
              onChange={() => handleAddressSelect(address)}
              className="mr-2"
            />
            <span className="font-semibold">{address.firstName} {address.lastName}</span>
            <span className="block text-gray-500">{address.streetAddress}, {address.state} {address.zipCode}</span>
          </label>
          <div className="flex justify-end text-sm mt-2">
            <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Edit</button>
          </div>
        </div>
      ))}

      <div className="p-6 border border-green-500 rounded-lg">
        <label className="block mb-4 cursor-pointer">
          <input
            type="radio"
            name="address"
            value="new"
            checked={selectedAddressId === null}
            onChange={() => {
              setSelectedAddressId(null);
              setFormData({
                id: 0,
                firstName: '',
                lastName: '',
                streetAddress: '',
                state: '',
                zipCode: '',
              });
            }}
            className="mr-2"
          />
          <span className="font-semibold text-green-600">Add New Address</span>
        </label>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={selectedAddressId === null ? formData.firstName : ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={selectedAddressId === null ? formData.lastName : ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={selectedAddressId === null ? formData.streetAddress : ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={selectedAddressId === null ? formData.state : ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={selectedAddressId === null ? formData.zipCode : ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200 font-medium"
          >
            Save
          </button>
        </div>
      </div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200 font-medium mt-3"
        onClick={handleFormSubmit}
      >
        Next
      </button>
    </div>
  );
};

export default AddressForm;