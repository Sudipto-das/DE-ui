import React from 'react';
import { ImageData } from '../inspirations/Interior/interior';


interface ImageGridProps {
    images: ImageData[] | undefined;
    selectedImages?: string[]; // Optional prop to handle selected images
    onImageClick?: (image:ImageData) => void; // Optional click handler
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, selectedImages = [], onImageClick }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {images?.map((image, index) => (
                <div
                    key={index}
                    className={`relative w-full h-auto cursor-pointer ${selectedImages.includes(image.image) ? 'border-4 border-violet-500 rounded-xl' : ''}`}
                    onClick={() => onImageClick && onImageClick(image)}
                >
                    <img
                        src={image.image}
                        alt={image.name}
                        className='w-full h-full object-cover rounded-md'
                    />
                    {selectedImages.includes(image.image) && (
                        <div className="absolute top-2 right-2">
                            <img src="/checklist.png" alt="" width={24} height={24} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
