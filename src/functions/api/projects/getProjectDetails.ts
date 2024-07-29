import { apiClient } from "../../../api";

async function getProjectDetails(user: { Id: string, Session: string, Token: string } , RecId : string) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        projTable: RecId
    })

    try {
        const response = await apiClient.get("/projTable/?"+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }    
}


export default getProjectDetails;