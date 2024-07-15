import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../../../api/fetchImages';
import ImageList from '../imageList';


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

 
    return <><ImageList isLoading={isLoading} error={error} images={images}/></>
};

export default InteriorPage;
