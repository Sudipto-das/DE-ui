import { apiClient } from "../../../api";

async function getAllProjects(user: { RecId: string, Session: string, Token: string }) {

    const data = new URLSearchParams({
        Id: user.RecId,
        Session: user.Session,
        Token: user.Token,
    })

    try {
        const response = await apiClient.get("/custTable/details?"+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }    
}


export default getAllProjects;