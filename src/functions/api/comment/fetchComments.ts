import { apiClient } from "../../../api";

async function getAllComments(user: { Id: string, Session: string, Token: string },RefRecId: string, RefTableName: string) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        RefRecId: RefRecId.toString(),
        RefTableName: RefTableName
    })

    try {
        const response = await apiClient.get("/remarks/?"+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }    
}


export default getAllComments;