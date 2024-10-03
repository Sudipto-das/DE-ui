import { apiClient } from "../../../api";
import CommentsInterface from "../../../interface/Comments";

export default async function addComment(
    comment: CommentsInterface,
    user: { Id: string; Session: string; Token: string },
    ref: { TableName: string; RecId: string },
    file?: File
) {
    const formData = new FormData();

    formData.append("remarks", JSON.stringify(comment)); // Send comment as JSON
    formData.append("Id", user.Id);
    formData.append("Session", user.Session);
    formData.append("Token", user.Token);
    formData.append("Ref", JSON.stringify(ref));

    if (file) {
        formData.append("file", file); // Append the file if it's selected
    }

    try {
        const response = await apiClient.post("/remarks/add", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error: any) {
        return error.response ? error.response.data : error.message;
    }
}
