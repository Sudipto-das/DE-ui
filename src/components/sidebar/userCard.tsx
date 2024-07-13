import React from 'react';
import Rating from "../../common/rating";
import { User } from "./userProfile";

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const cardColors: Record<User['category'], string> = {
        Premium: 'bg-green-100',
        Standard: 'bg-yellow-100',
        Ultimate: 'bg-orange-100',
    };

    return (
        <div className={`relative w-full max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden ${cardColors[user.category]}`}>
            <div className="p-4">
                <div className="flex flex-col items-center">

                    <img
                        src="Avatar.png"
                        alt="User Avatar"
                        className="w-20 h-20 rounded-full mb-2 border-4 border-white"
                    />

                    <span className="font-bold 2xl:text-2xl mb-2 text-gray-900 md:text-center text-lg">{user.name}</span>
                    <div className="2xl:flex items-center gap-1 mb-2">
                        <span className="text-gray-700 text-sm font-medium">{user.designation} | </span>
                        <span className="text-gray-600 text-sm font-medium">{user.projects}+ projects | </span>
                        <span className="text-gray-600 text-sm font-medium">Exp.{user.experience}</span>

                    </div>
                    <div className="mt-2">
                        <Rating rating={user.rating} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
