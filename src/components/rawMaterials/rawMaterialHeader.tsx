import React from 'react';
import FilterButton from './filterButton';
import { useRecoilValue } from 'recoil';
import { cartItemState } from '../../store/rawMaterailState/cartItemState';

interface RawMaterialHeaderProps {
    onOpenFilterModal: () => void;
    onOpenCartModal: () => void;
    onSelectTab: (tab: 'construction' | 'interior') => void;
    selectedTab: 'construction' | 'interior';
}

const RawMaterialHeader: React.FC<RawMaterialHeaderProps> = ({ onOpenFilterModal, onOpenCartModal, onSelectTab, selectedTab }) => {
    const cartItems = useRecoilValue(cartItemState)
    return (
        <div className='flex justify-between items-center mb-5 border px-5 py-4 bg-white shadow-md rounded-lg'>
            <div className='flex gap-8'>
                <button
                    className={`uppercase text-sm font-bold cursor-pointer transition-colors duration-200 ${
                        selectedTab === 'construction'
                            ? 'text-white bg-green-700 px-4 py-2 rounded-full shadow-md hover:bg-green-800'
                            : 'text-gray-600 hover:text-green-700'
                    }`}
                    onClick={() => onSelectTab('construction')}
                >
                    Construction
                </button>
                <button
                    className={`uppercase text-sm font-bold cursor-pointer transition-colors duration-200 ${
                        selectedTab === 'interior'
                            ? 'text-white bg-green-700 px-4 py-2 rounded-full shadow-md hover:bg-green-800'
                            : 'text-gray-600 hover:text-green-700'
                    }`}
                    onClick={() => onSelectTab('interior')}
                >
                    Interior
                </button>
            </div>
            <div className='flex gap-6 items-center'>
                <FilterButton onClick={onOpenFilterModal} />
                <div className='relative cursor-pointer'>
                    <img
                        src="shopping-cart.png"
                        alt="Cart"
                        width={32}
                        className="hover:scale-110 transition-transform duration-200"
                        onClick={onOpenCartModal}
                    />
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2'>
                        {cartItems.length}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RawMaterialHeader;
