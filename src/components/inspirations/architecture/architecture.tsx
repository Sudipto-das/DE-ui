import React from 'react';
import ImageList from '../imageList';
import Topber from '../topbar';
import { architectureImageData } from '../../../common/architecture';

export interface ImageData {
    image: string;
    name: string;
}

const ArchitecturePage: React.FC = () => {
   


    return <>
        <div >
            <Topber />
            <ImageList isLoading={false} images={architectureImageData} />
        </div>
    </>
};

export default ArchitecturePage;
