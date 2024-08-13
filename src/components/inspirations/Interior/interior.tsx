import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../../../functions/api/fetchImages';
import ImageList from '../imageList';
import Topber from '../topbar';


export interface ImageData {
    image: string;
    name: string;
}

const InteriorPage: React.FC = () => {
    const { isLoading, error, data: images } = useQuery<ImageData[]>({
        queryKey: ['images'],
        queryFn: getImages,
        staleTime: 60000, // Example: Set stale time to 60 seconds (1 minute)
    });


    return <>
        <div >
            <Topber />
            <ImageList isLoading={isLoading} error={error} images={images} />
        </div>
    </>
};

export default InteriorPage;
