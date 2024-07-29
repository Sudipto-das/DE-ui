import { apiClient } from "../../../api";

export const verifyOtp = async ({ otp, countryCode, phone}: { otp: string, countryCode: string, phone: string, }): Promise<any> => {
    const response = await apiClient.post('/phone/verify-otp', { otp, countryCode, phone });
    return response.data;
};

export   const handleLogin = async ({
    otp,
    countryCode,
    phone,
  }: {
    otp: string;
    countryCode: string;
    phone: string;
  }) => {
    const response = await verifyOtp({ otp, countryCode, phone });
    if (response.status !== 200) {
      throw new Error(response.message || "Server error");
    }
    return response.data;
  };