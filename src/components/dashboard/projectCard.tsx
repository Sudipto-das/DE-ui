import React from 'react';

interface ProjectCardProps {
  id:string;
  image: string;
  title: string;
  description: string;
  designer: string;
  duration: string;
  budget: string;
  size: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, designer, duration, budget, size }) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-lg overflow-hidden mb-4 items-center px-3 flex-grow md:flex-row">
      <img src={image} alt={title} className="w-32 h-32 object-cover pt-2 md:pt-0" />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-1 text-[#353945]">{title}</h2>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
        </div>
        <div className="text-sm text-[#777E90] flex justify-between flex-col md:flex-row">
          <div>
            <div className='flex items-center'>
              <img src='user.png' className="w-3 h-3 mr-4" />
              <h3>Designer: {designer}</h3>
            </div>
            <div className='flex items-center'>
              <img src='calendar.png' className="w-3 h-3 mr-4" />
              <h3>Duration: {duration}</h3>
            </div>
          </div>
          <div>
            <div className='flex items-center'>
              <img src='moneys.png' className="w-3 h-3 mr-4" />
              <h3>Budget: {budget}</h3>
            </div>
            <div className='flex items-center'>
              <img src='size.png' className="w-3 h-3 mr-4" />
              <h3>Size: {size}</h3> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
