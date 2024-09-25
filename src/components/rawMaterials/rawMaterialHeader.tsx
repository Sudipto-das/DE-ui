import React from 'react';
import FilterButton from './filterButton';
import { useRecoilValue } from 'recoil';
import { cartItemState } from '../../store/rawMaterailState/cartItemState';
import { useNavigate } from 'react-router-dom';

interface RawMaterialHeaderProps {
    onOpenFilterModal: () => void;
    onSelectTab: (tab: 'construction' | 'interior') => void;
    selectedTab: 'construction' | 'interior';
}

const RawMaterialHeader: React.FC<RawMaterialHeaderProps> = ({ onOpenFilterModal, onSelectTab, selectedTab }) => {
    const cartItems = useRecoilValue(cartItemState);
    const navigate = useNavigate();

    return (
        <div className='flex flex-col sm:flex-row justify-between items-center mb-5 border px-5 py-4 bg-white shadow-lg rounded-lg'>
            <div className='flex gap-4 sm:gap-8 mb-3 sm:mb-0'>
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
            <div className='flex gap-4 sm:gap-6 items-center'>
                <FilterButton onClick={onOpenFilterModal} />
                <div className='relative cursor-pointer'>
                    <img
                        src="shopping-cart.png"
                        alt="Cart"
                        width={32}
                        className="hover:scale-110 transition-transform duration-200"
                        onClick={() => navigate('/cart')}
                    />
                    {cartItems.length > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2'>
                            {cartItems.length}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RawMaterialHeader;