import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  designer: string;
  duration: string;
  budget: string;
  size: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, image, title, description, designer, duration, budget, size }) => {
  const navigate = useNavigate()
  const handleClick = (id: string) => {
    navigate(`/projects/${id}`)
  }
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-lg overflow-hidden mb-4 items-center px-3 flex-grow md:flex-row hover:cursor-pointer font-inter"
      onClick={() => { handleClick(id) }}>
      <img src={image} alt={title} className="w-32 h-32 object-cover pt-2 md:pt-0" />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-1 text-[#353945]">{title}</h2>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
        </div>
        <div className="text-sm text-[#777E90] flex justify-between flex-col md:flex-row">
          <div>
            <div className='flex items-center'>
              <img src='/user-shield.png' className="w-4 h-4 mr-3" />
              <h3>Designer: {designer}</h3>
            </div>
            <div className='flex items-center'>
              <img src='/calendar-blue.png' className="w-4 h-4 mr-3" />
              <h3>Duration: {duration}</h3>
            </div>
          </div>
          <div>
            <div className='flex items-center'>
              <img src='/coin-blue.png' className="w-4 h-4 mr-3" />
              <h3>Budget: {budget}</h3>
            </div>
            <div className='flex items-center'>
              <img src='square-blue.png' className="w-4 h-4 mr-3" />
              <h3>Size: {size}</h3> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
