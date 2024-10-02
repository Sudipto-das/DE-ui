import { apiClient } from "../../api";

async function getMyDesigns(user: {Id: string, Session: string, Token: string }) {
    // Create URLSearchParams to append the query params to the URL
    const params = new URLSearchParams({
        Id: user.Id,   // Using RecId as Id in the API query string
        Session: user.Session,
        Token: user.Token,
    });

    try {
        // Making a GET request to the `/designs/uploaded` route with headers
        const response = await apiClient.get(
            "custTable/designs/my?" + params.toString(),
            {
                headers: {
                    'Content-Type': 'application/json',  // Setting content type
                },
            }
        );
        
        // Return the full response.data
        return response.data; 
    } catch (error: any) {
        // Handle error and throw a detailed message if available
        throw new Error(error.response?.data || "Error fetching uploaded designs");
    }
}

export default getMyDesigns;
