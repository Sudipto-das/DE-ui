import React from 'react';

interface EditButtonProps {
  isEditing: boolean;
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ isEditing, onClick }) => {
  return (
    <button
      className="ml-auto px-3 py-1 text-sm font-medium text-blue-500 border border-blue-500 rounded flex items-center hover:bg-blue-500 hover:text-white transition"
      onClick={onClick}
    >
      <img src={isEditing?`/save.png`:`/pencil.png`} alt="Edit" className="w-4 h-4 mr-1" />
      {isEditing ? 'Save' : 'Edit'}
    </button>
  );
};

export default EditButton;
