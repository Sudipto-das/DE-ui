import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../../../api/fetchImages';
import Loader from '../../../common/loader';


interface ImageData {
    image: string;
    name: string;
}

const InteriorPage: React.FC = () => {
    const { isLoading, error, data: images } = useQuery<ImageData[]>({
        queryKey: ['images'],
        queryFn: getImages,
        staleTime: 60000, // Example: Set stale time to 60 seconds (1 minute)
    });

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div className='flex items-center justify-center h-screen text-lg text-red-600'>Error: {error.message}</div>;
    }

    return (
        <div className='p-4'>
            <h1 className='text-xl font-bold mb-4'>This is Interior Page</h1>
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

export default InteriorPage;
