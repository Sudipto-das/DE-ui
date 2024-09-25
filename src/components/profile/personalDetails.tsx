import React, { useState } from 'react';
import { copyToClipboard } from '../../utils/clipboardUtils';
import { useRecoilValue } from 'recoil';
import { AddressState } from '../../store/profileState/AddressState';


interface PersonalDetailsProps {
    name: string;
    role: string;
    
    category: "Premium" | "Standard" | "Ultimate";
    referralCode: string;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ name, role, category, referralCode }) => {
    const address = useRecoilValue(AddressState)
    const [copied, setCopied] = useState(false);
    const badgeColors: Record<PersonalDetailsProps['category'], string> = {
        Premium: 'bg-green-500',
        Standard: 'bg-yellow-500',
        Ultimate: 'bg-orange-500',
    };

    const handleCopy = () => {
        copyToClipboard(referralCode, setCopied);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 font-inter">My Profile</h2>
            <div className="flex  flex-col gap-3 md:flex-row items-center justify-between mb-6 p-4 border rounded-lg ">
                <div className="flex">
                    <img
                        src="/Avatar.png"
                        alt="Profile"
                        className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className='w-full md:flex justify-between items-center'>
                        <div>
                            <div className="flex gap-3 items-center">
                                <h3 className="text-lg font-bold font-inter">{name}</h3>
                                <div className={`${badgeColors[category]} text-white text-xs font-semibold px-2 py-1 text-center `}>
                                    <h1 className='flex justify-center items-center font-sans'>{category.toUpperCase()}</h1>
                                </div>
                            </div>
                            <p className="text-gray-600 font-inter">{role}</p>
                            <p className="text-gray-600 font-inter">{address?.Address}</p>
                        </div>
                    </div>
                </div>
                <div className="ml-4">
                    <div className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <span className="relative px-3 py-2 transition-all ease-in duration-75 bg-opacity-0">
                            Referral Code: <span className='font-bold text-lg'>{referralCode}</span>
                        </span>
                        <div onClick={handleCopy} className='hover:cursor-pointer'>{copied ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-check"><path d="m12 15 2 2 4-4" /><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                        }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PersonalDetails;
