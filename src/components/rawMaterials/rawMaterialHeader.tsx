import React from 'react';
import FilterButton from './filterButton';

interface RawMaterialHeaderProps {
    onOpenFilterModal: () => void;
    onOpenCartModal: () => void;
}

const RawMaterialHeader: React.FC<RawMaterialHeaderProps> = ({ onOpenFilterModal, onOpenCartModal }) => {
    return (
        <div className='flex justify-between items-center mb-2'>
            <h1 className='text-xl font-bold text-slate-600'>Raw Materials</h1>
            <div className='flex gap-4 items-center'>
                <FilterButton onClick={onOpenFilterModal} />
                <div className='mr-4'>
                    <img src="shopping-cart.png" alt="Cart" width={32} onClick={onOpenCartModal} />
                </div>
            </div>
        </div>
    );
};

export default RawMaterialHeader;
