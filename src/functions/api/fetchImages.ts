export const getImages = async () => {
    const response = await fetch('https://www.designelementary.com/api/utills/get-all-images');
    const data = await response.json();
    return data.data
}