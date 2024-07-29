import { apiClient } from "../../../api";

async function getAllProjects(user: { Id: string, Session: string, Token: string }) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
    })

    try {
        const response = await apiClient.get("/projTable/all?"+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }    
}


export default getAllProjects;