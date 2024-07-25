import React from 'react';

interface CommentCardProps {
  userImage: string;
  userName: string;
  designer: string;
  comment: string;
}

const CommentCard: React.FC<CommentCardProps> = ({ userImage, userName, designer, comment }) => {
  return (
    <div className="flex items-start bg-white shadow-sm rounded-lg p-3 mb-4 border">
      <img src={userImage} alt={userName} className="w-7 h-7 rounded-full mr-4" />
      <div className="flex flex-col font-inter">
        <div className="flex items-center mb-2 justify-between">
          <span className="font-semibold mr-2 text-sm ">{userName}</span>
          <div className='flex items-center '>
            <img src="user.png" alt="" className="w-3 h-3 mr-4" />
          <span className="text-gray-500 text-xs">Designer: {designer}</span>
          </div>
        </div>
        <p className="text-gray-700 text-xs 2xl:text-sm">{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
