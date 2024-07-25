// src/components/PartnerCard.tsx
import React from 'react';

interface PartnerCardProps {
    logo: string;
    name: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ logo, name }) => {
    return (
        <div className=" p-4 rounded-lg shadow-xl flex flex-col items-center justify-center bg-slate-50">
            <img src={logo} alt={`${name} logo`} className=' w-40' />
        </div>
    );
};

export default PartnerCard;
