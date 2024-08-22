import { useState, useContext } from 'react';
import { AppContext } from '../context/Context';
import { ImageData } from '../components/inspirations/Interior/interior';


const useImageClick = () => {
    const { user: CurrentUser, raiseToast } = useContext(AppContext);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const handleImageClick = async (image:ImageData) => {
        try {
            const response = await fetch('http://localhost:3000/api/utills/saved-images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...image, userId: CurrentUser.Id }),
            });

            const result = await response.json();
            if (response.status === 201) {
                raiseToast("Already Saved!");
                return;
            }
            if (response.ok) {
                setSelectedImages(prev => [...prev, image.image]);
                raiseToast("Saved successfully!", 'success');
            } else {
                console.error('Failed to save image:', result.error);
            }
        } catch (error) {
            console.error('An error occurred while saving the image:', error);
        }
    };

    return {
        selectedImages,
        handleImageClick,
    };
};

export default useImageClick;
