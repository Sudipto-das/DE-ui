import React from 'react';
import CommentsInterface from '../../interface/Comments';



const CommentCard: React.FC<CommentsInterface> = ({ Image, CreatedBy, Title, Description }) => {
  return (
    <div className="flex items-start bg-white shadow-sm rounded-lg p-3 mb-4 border">
      <img src={Image} alt={CreatedBy} className="w-7 h-7 rounded-full mr-4" />
      <div className="flex flex-col font-inter">
        <div className="flex items-center mb-2 justify-between">
          <span className="font-semibold mr-2 text-sm ">{CreatedBy}</span>
          <div className='flex items-center '>
            <img src="/user-shield.png" alt="" className="w-3 h-3 mr-2" />
          <span className="text-gray-500 text-xs">Designer: {Title}</span>
          </div>
        </div>
        <p className="text-gray-700 text-xs 2xl:text-sm">{Description}</p>
      </div>
    </div>
  );
};

export default CommentCard;
