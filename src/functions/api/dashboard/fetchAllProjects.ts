import { apiClient } from "../../../api";

async function getAllProjects(user: { RecId: string, Session: string, Token: string }) {
    const data = new URLSearchParams({
        Id: user.RecId,  // Yeh Id correct hai?
        Session: user.Session,
        Token: user.Token,
    });

    try {
        const response = await apiClient.get("/custTable/details?" + data.toString());
        console.log(response.data)
        return response.data;  // Sirf response.data ko return karein
    } catch (error: any) {
        throw new Error(error.response?.data || "Error fetching projects");
    }
}
export default getAllProjects