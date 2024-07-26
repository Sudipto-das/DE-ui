import React from 'react';

import ItemCard from './ItemCard';
import { useRecoilValue } from 'recoil';
import { selectedCategoryState } from '../../store/selectCatagoryState';
import { FactoriesData } from '../../store/factoriesDataState';
import { PaintingData } from '../../types/paintingData';

interface ItemListProps {
  data:FactoriesData[]|PaintingData[]
}

const ItemList: React.FC<ItemListProps> = ({data}) => {
  const selectedCategory = useRecoilValue(selectedCategoryState)
  return (
    <div className='p-4 border rounded-lg mt-4 h-[30rem] 2xl:h-[44rem] font-inter'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-xl font-bold'>{selectedCategory}</h1>
        <button className='text-blue-500 hover:underline text-sm font-bold'>SEE MORE</button>
      </div>
      <div className='overflow-y-auto h-[92%]'>
        {data.map((factory, index) => (
          <ItemCard key={index} {...factory} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
