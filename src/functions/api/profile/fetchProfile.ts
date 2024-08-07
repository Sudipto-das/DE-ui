import { apiClient } from "../../../api";

async function getProfileData(user: { RecId: string, Session: string, Token: string }) {

    const data = new URLSearchParams({
        Id: user.RecId,
        Session: user.Session,
        Token: user.Token,
        RefRecId:user.RecId
    })

    try {
        const response = await apiClient.get("/custTable/profile?"+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }    
}


export default getProfileData;