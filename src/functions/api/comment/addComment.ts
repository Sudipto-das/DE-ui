import { apiClient } from "../../../api";
import CommentsInterface from "../../../interface/Comments";

export default async function addComment(comment: CommentsInterface, user: { Id: string, Session: string, Token: string },ref: { TableName: string, RecId: string }) {

    const data = {
        remarks: comment,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        Ref: ref
    }

    try {
        const response = await apiClient.post("/remarks/add",data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

