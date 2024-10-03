import { apiClient } from "../../../api";

async function getAllProjects(user: { Id: string, Session: string, Token: string }) {
    const data = new URLSearchParams({
        Id: user.Id,  // Yeh Id correct hai?
        Session: user.Session,
        Token: user.Token,
    });

    try {
        const response = await apiClient.get("/custTable/details?" + data.toString());
        
        return response.data.data;  // Sirf response.data ko return karein
    } catch (error: any) {
        throw new Error(error.response?.data || "Error fetching projects");
    }
}
export default getAllProjects