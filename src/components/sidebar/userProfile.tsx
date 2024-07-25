import React from 'react';
import Rating from "../../common/rating";
import UserCard from './userCard';

export interface User {
    name: string;
    experience: string;
    role: string;
    rating: number;
    category: 'Premium' | 'Standard' | 'Ultimate';
    projects: number;
}

interface StatusBadgeProps {
    category: 'Premium' | 'Standard' | 'Ultimate';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ category }) => {
    const badgeColors: Record<User['category'], string> = {
        Premium: 'bg-green-500',
        Standard: 'bg-yellow-500',
        Ultimate: 'bg-orange-500',
    };

    return (
        <div className={`${badgeColors[category]} text-white flex items-center justify-center w-6 2xl:w-8`}>
            <span className="transform -rotate-90 text-sm font-semibold tracking-wider">
                {category.toUpperCase()}
            </span>
        </div>
    );
};



const UserProfile: React.FC = () => {
    const user: User = {
        name: 'Nguyen Duy Phuoc',
        experience: '5 years',
        role: 'Designer',
        rating: 4,
        category: 'Premium',
        projects: 10,
    };

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="bg-[#F4F5F6] m-4 rounded-md flex relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
           {!isHovered &&  <div className="flex-grow pl-4 py-4 flex items-center gap-3">
                <img
                    src="/Avatar.png"
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full mb-2"
                />
                <div className="flex flex-col">
                    <span className="font-bold text-sm font-inter ">{user.name}</span>
                    <span className="text-gray-500 text-xs font-inter font-medium">{user.role}</span>
                    <div className="mt-2">
                        <Rating rating={user.rating} />
                    </div>
                </div>
            </div>}
            <StatusBadge category={user.category} />

            {isHovered && <UserCard user={user} />}
        </div>
    );
};

export default UserProfile;