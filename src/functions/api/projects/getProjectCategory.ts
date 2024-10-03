import { apiClient } from "../../../api";

async function getProjectCategory(user: { Id: string, Session: string, Token: string }, type: string) {
  // Construct query parameters using URLSearchParams
  const data = new URLSearchParams({
    Id: user.Id,
    Session: user.Session,
    Token: user.Token,
    Type: type,  // Add the Type parameter here
  });

  try {
    // Make the API call using `apiClient` and handle the response
    const response = await apiClient.get("/projCategory/type?" + data)
      .then((response) => response.data)
      .catch((error) => error.response.data);

    return response;
    
  } catch (error: any) {
    // Return the error if something goes wrong
    return error;
  }
}

export default getProjectCategory;
