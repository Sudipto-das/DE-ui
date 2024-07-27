import { apiClient } from "../../../api";

export const verifyOtp = async ({ otp, countryCode, phone}: { otp: string, countryCode: string, phone: string, }): Promise<any> => {
    const response = await apiClient.post('/phone/verify-otp', { otp, countryCode, phone });
    return response.data;
};
