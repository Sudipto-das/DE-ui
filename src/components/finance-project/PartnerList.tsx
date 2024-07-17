// src/components/PartnerList.tsx
import React from 'react';
import PartnerCard from './partnerCard';


const partners = [
  { name: 'Axis Bank', logo: 'Axis_Bank-Logo.wine.png' },
  { name: 'HDFC Bank', logo: 'pngegg.png' },
  // Add more partners as needed
];

const PartnerList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {partners.map((partner, index) => (
        <PartnerCard key={index} logo={partner.logo} name={partner.name} />
      ))}
    </div>
  );
};

export default PartnerList;
