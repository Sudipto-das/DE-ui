import React, { useState } from 'react';
import { AppContext } from '../../context/Context';
import { submitLoanApplication } from '../../functions/api/finance/basicLoanReq';


enum LoanType {
  HL = "HL",
  LAP = "LAP"
}

interface FormData {
  loanType: LoanType;
  loanAmountReq: number;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  pincode: string;
}

const LoanForm: React.FC = () => {
  const { user: CurrentUser } = React.useContext(AppContext); // Assuming user context is needed
  const [formData, setFormData] = useState<FormData>({
    loanType: LoanType.HL,
    loanAmountReq: 0,
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    pincode: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Add unique id to form data
    const dataToSubmit = {
      ...formData,
      id: CurrentUser.Id,
    };

    try {
      const response = await submitLoanApplication(dataToSubmit); // Call the API
      console.log('API Response:', response);
      setSuccess(true); // Mark as successful
    } catch (error) {
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 mt-10 border">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Loan Application Form</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">Application submitted successfully!</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Loan Type and Loan Amount */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Type</label>
            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option value={LoanType.HL}>Home Loan (HL)</option>
              <option value={LoanType.LAP}>Loan Against Property (LAP)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Amount Required</label>
            <input
              type="number"
              name="loanAmountReq"
              value={formData.loanAmountReq}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>

        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Mobile and Email */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter 10-digit mobile number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="example@example.com"
            />
          </div>
        </div>

        {/* Pincode */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Enter your pincode"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanForm;
