import React from 'react';
import FactoryCard from './FactoryCard';

const factories = [
  {
    image: 'https://via.placeholder.com/150',  // Replace with actual image URL
    title: 'Standard',
    discount: '10%',
    rating: 4,
    budget: '$50,000',
    duration: '12 weeks',
    size: '800 sq ft / 1 bedroom apartment',
  },
  {
    image: 'https://via.placeholder.com/150',  // Replace with actual image URL
    title: 'Premium',
    discount: '20%',
    rating: 5,
    budget: '$50,000',
    duration: '12 weeks',
    size: '800 sq ft / 1 bedroom apartment',
  },
  {
    image: 'https://via.placeholder.com/150',  // Replace with actual image URL
    title: 'Luxury',
    discount: '30%',
    rating: 5,
    budget: '$50,000',
    duration: '12 weeks',
    size: '800 sq ft / 1 bedroom apartment',
  },
  {
    image: 'https://via.placeholder.com/150',  // Replace with actual image URL
    title: 'Premium',
    discount: '20%',
    rating: 5,
    budget: '$50,000',
    duration: '12 weeks',
    size: '800 sq ft / 1 bedroom apartment ',
  },
  {
    image: 'https://via.placeholder.com/150',  // Replace with actual image URL
    title: 'Luxury',
    discount: '30%',
    rating: 4,
    budget: '$50,000',
    duration: '12 weeks',
    size: '800 sq ft / 1 bedroom apartment',
  },
  // Add more factories as needed
];

const FactoriesList: React.FC = () => {
  return (
    <div className='p-4 border rounded-lg mt-4 h-[44rem]'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-xl font-bold'>Factories</h1>
        <button className='text-blue-500 hover:underline text-sm'>SEE MORE</button>
      </div>
      <div className='overflow-y-auto h-[92%]'>
        {factories.map((factory, index) => (
          <FactoryCard key={index} {...factory} />
        ))}
      </div>
    </div>
  );
};

export default FactoriesList;
