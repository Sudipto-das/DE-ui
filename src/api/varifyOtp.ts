// api/verifyOtp.ts
import axios from 'axios';

export const verifyOtp = async (otp: string) => {
    const response = await axios.post('/api/verify-otp', { otp });
    return response.data;
};
