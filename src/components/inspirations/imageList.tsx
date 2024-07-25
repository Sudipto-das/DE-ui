import React from 'react';
import Loader from '../../common/loader';

interface ImageData {
    image: string;
    name: string;
}

interface ImageListProps {
    isLoading: boolean;
    error: any; // You can specify the exact type based on your error structure
    images: ImageData[] | undefined;
}

const ImageList: React.FC<ImageListProps> = ({ isLoading, error, images }) => {
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
                    <div key={index} className='w-full h-auto'>
                        <img src={image.image} alt={image.name} className='w-full h-full object-cover rounded-md' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageList;
