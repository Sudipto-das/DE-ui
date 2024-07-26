// api/sentOtp.ts
import axios from "axios";

export const sentOtp = async ({ phone, countryCode }: { phone: string, countryCode: string }) => {
    const response = await axios.post('/sent-otp', { phone, countryCode });
    return response.data;
};
