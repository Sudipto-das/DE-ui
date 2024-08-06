import CommentsInterface from "../../../interface/Comments";
import { apiClient } from "../../../api";

export default async function addComment(remarks:CommentsInterface, user: { Id: string, Session: string, Token: string },ref: { TableName: string, RecId: number }) {

    const data = {
        remarks: remarks,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        Ref: ref
    }

    try {
        const response = await apiClient.post("/remarks/?"+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

