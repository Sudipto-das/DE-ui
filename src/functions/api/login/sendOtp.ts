import { apiClient } from "../../../api";


export const sendOtp = async ({ phone, countryCode }: { phone: string, countryCode: string }): Promise<any> => {
    const response = await apiClient.post('/phone/request-otp', { phone, countryCode });
    return response.data;
};
