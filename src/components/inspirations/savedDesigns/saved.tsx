import React, { useContext} from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSavedImages } from '../../../functions/api/fetchSavedImages';
import { AppContext } from '../../../context/Context';
import ImageList from '../imageList';


interface ImageSavedData {
    userId:string
    image: string;
    name: string;
}

const SavedDesigns: React.FC = () => {
    const { user: CurrentUser } = useContext(AppContext)
    const { isLoading, error, data: Savedimages } = useQuery<ImageSavedData[]>({
        queryKey: ['Savedimages', CurrentUser?.id],
        queryFn: () => getSavedImages(CurrentUser?.id),
        
    });




    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='p-4'>
            <h2 className="text-2xl font-bold mb-4">Saved Designs</h2>
            <ImageList isLoading={isLoading} error={error} images={Savedimages} />
        </div>
    );
};

export default SavedDesigns;
