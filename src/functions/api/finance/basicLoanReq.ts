import axios from 'axios';

interface LoanFormData {
  loanType: string;
  loanAmountReq: number;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  pincode: string;
  id: string;
}

// API call to submit loan application
export const submitLoanApplication = async (formData: LoanFormData) => {
  const apiUrl = 'https://dev-applicationservice.basichomeloan.com/api/v1/NewApplication/FullfilmentByBasic';

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'your-api-key', // Replace with the actual API key
    Authorization: 'Basic <your-auth-token>', // Replace with the actual token
  };

  try {
    const response = await axios.post(apiUrl, formData, { headers });
    return response.data; // Return response data to be handled in the component
  } catch (error) {
    console.error('Error submitting loan application:', error);
    throw error;
  }
};
