import { apiClient } from "../../../api";

async function getUserByPhone(phone: string, countryCode: string) {
    const params = new URLSearchParams({
        phone,
        countryCode,
    
    });

    try {
        const response = await apiClient.get("/custTable/by/phone?"+params);
        return response.data; // Return the data on success
    } catch (error: any) {
        console.error("Error fetching user by phone:", error);
        return error.response?.data || { message: "An error occurred while fetching user data." };
    }
}

export default getUserByPhone;
