import React, { useContext, useState } from 'react';
import Loader from '../ui/loader';
import { AppContext } from '../../context/Context';
import { ImageData } from './Interior/interior';

interface ImageListProps {
    isLoading: boolean;
    error: any; // You can specify the exact type based on your error structure
    images: ImageData[] | undefined;
}

const ImageList: React.FC<ImageListProps> = ({ isLoading, error, images }) => {
    const { user: CurrentUser,raiseToast } = useContext(AppContext);
    const [selectedImages, setSelectedImages] = useState<string[]>([]); // Array to track selected images
    
    const handleImageClick = async (image: ImageData) => {
        try {
            const response = await fetch('http://localhost:3000/api/utills/saved-images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...image, userId: CurrentUser.Id }),
            });

            const result = await response.json();
            if(response.status == 201){
                raiseToast("Already Saved!");
                return
            }
            if (response.ok) {
                setSelectedImages(prev => [...prev, image.image]); 
                raiseToast("Saved successfully!",'success');
            } else {
                console.error('Failed to save image:', result.error);
            }
        } catch (error) {
            console.error('An error occurred while saving the image:', error);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div className='flex items-center justify-center h-screen text-lg text-red-600'>Error: {error.message}</div>;
    }

    return (
        <div className='p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {images?.map((image, index) => (
                    <div 
                        key={index} 
                        className={`relative w-full h-auto cursor-pointer ${selectedImages.includes(image.image) ? 'border-4 border-violet-500 rounded-xl' : ''}`} 
                        onClick={() => handleImageClick(image)}
                    >
                        <img
                            src={image.image}
                            alt={image.name}
                            className='w-full h-full object-cover rounded-md'
                        />
                        {selectedImages.includes(image.image) && (
                            <div className="absolute top-2 right-2">
                                <img src="/checklist.png" alt="" width={24} height={24}/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageList;
