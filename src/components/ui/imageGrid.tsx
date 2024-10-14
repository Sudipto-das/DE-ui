import React from 'react';
import Masonry from 'react-masonry-css';
import { ImageData } from '../inspirations/Interior/interior';

interface ImageGridProps {
    images: ImageData[] | undefined;
    selectedImages?: string[]; // Optional prop to handle selected images
    onImageClick?: (image: ImageData) => void; // Optional click handler
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, selectedImages = [], onImageClick }) => {
    // Define the breakpoints for the masonry layout
    const breakpointColumnsObj = {
        default: 4, // Default number of columns
        1100: 3,    // 3 columns for screens larger than 1100px
        700: 2,     // 2 columns for screens larger than 700px
        500: 1,     // 1 column for screens larger than 500px
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid" // Optional: Add your own class for styling
            columnClassName="my-masonry-grid_column" // Optional: Add your own class for styling
        >
            {images?.map((image, index) => (
                <div
                    key={index}
                    className={`relative w-full h-auto cursor-pointer ${selectedImages.includes(image.image) ? 'border-4 border-violet-500 rounded-xl' : ''}`}
                    onClick={() => onImageClick && onImageClick(image)}
                >
                    <img
                        src={image.image}
                        alt={image.name}
                        className='w-full h-auto object-cover rounded-md transition-transform duration-200 hover:scale-105 m-4'
                    />
                    {selectedImages.includes(image.image) && (
                        <div className="absolute top-2 right-2">
                            <img src="/checklist.png" alt="" width={24} height={24} />
                        </div>
                    )}
                </div>
            ))}
        </Masonry>
    );
};

export default ImageGrid;
