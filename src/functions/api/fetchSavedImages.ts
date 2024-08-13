export const getSavedImages = async(userId?: string) =>{
        const response = await fetch(`http://localhost:3000/api/utills/saved-images${userId ? `?userId=${userId}` : ''}`);
        const data = await response.json();
        return data.data
    }
