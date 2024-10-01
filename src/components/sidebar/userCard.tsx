import React, { useEffect, useState } from 'react';


import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { User } from '../../interface/User';

interface UserCardProps {
    user: User | null;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const [whatsAppLink, setWhatsAppLink] = useState('');
    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            setWhatsAppLink(`whatsapp://send?phone=${user?.RmPhone}`);
        } else {
            setWhatsAppLink(`https://web.whatsapp.com/send?phone=${user?.RmPhone}`);
        }
    }, []);
    return (
        <div className="relative w-full max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-4">
            {/* Close button */}
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-200">
                <MdClose size={20} />
            </button>

            {/* Content */}
            <div className="flex flex-col items-start">
                {/* Header */}
                <h2 className="font-bold text-xl mb-2">
                    Hi, I am {user && user.Manager}, Your Account Manager
                </h2>

                {/* Description */}
                <p className="text-sm mb-4">
                    I've helped 300+ businesses streamline over 20+ countries in the last 20 days.
                </p>

                {/* Contact Info */}
                <div className="flex flex-col space-y-2 mb-4">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2" />
                        <span>{user?.RmPhone || '8240435788'}</span>
                    </div>
                    <div className="flex items-center">
                        <FaPhoneAlt className="mr-2" />
                        <span>{user?.RmEmail || 'abc@gmail.com'}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                    <button className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 text-xs">
                        <FaPhoneAlt className="mr-2" />
                        Call Now
                    </button>
                    <a
                        href={whatsAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xs">
                        <FaWhatsapp className="mr-2" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserCard;