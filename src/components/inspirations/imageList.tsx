import React from 'react';
import useImageClick from '../../hooks/useImageClick'; // Adjust the path as necessary
import Loader from '../ui/loader';
import { ImageData } from './Interior/interior';
import ImageGrid from '../ui/imageGrid';

interface ImageListProps {
    isLoading: boolean;
    error?: any; 
    images: ImageData[] | undefined;
}

const ImageList: React.FC<ImageListProps> = ({ isLoading, error, images }) => {
    const { selectedImages, handleImageClick } = useImageClick(); 

    if (isLoading) {
        return <div className='flex items-center justify-center h-96'><Loader /></div>;
    }

    if (error) {
        return <div className='flex items-center justify-center h-screen text-lg text-red-600'>Error: {error.message}</div>;
    }

    return (
        <div className='p-4'>
        <ImageGrid
            images={images}
            selectedImages={selectedImages}
            onImageClick={handleImageClick}
        />
    </div>
    );
};

export default ImageList;
