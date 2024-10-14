import { apiClient } from "../../../api";

async function createLead(leadData: {
    Title: string;
    Description: string;
    Type: string;
    Category: string;
    Size: string;
    AccountNum: string;
}, user: { Id: string; Session: string; Token: string }) {
    // Construct the payload for the POST request
    const payload = {
        leads: leadData,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    };

    try {
        // Making a POST request to the `/leads/create` route with headers
        const response = await apiClient.post(
            "leads/create", 
            payload,
            {
                headers: {
                    'Content-Type': 'application/json',  // Setting content type
                },
            }
        );

        // Return the full response data
        return response.data; 
    } catch (error: any) {
        // Check if the error has a response and message, and throw that error message
        const errorMessage = error.response?.data?.message || "Error creating lead";
        
        // Throw the error message so it can be caught by the calling function
        throw new Error(errorMessage);
    }
}

export default createLead;
