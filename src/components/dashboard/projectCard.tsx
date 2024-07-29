import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectsInterface from '../../interface/Project';
import { calculateDuration } from '../../functions/durationCalc';



const ProjectCard: React.FC<ProjectsInterface> = ({ Name, Description, DesignManager,StartDate, EndDate , Budget,  Type, RecId }) => {
  const navigate = useNavigate()
  const handleClick = (id: string) => {
    navigate(`/projects/${id}`)
  }
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-lg overflow-hidden mb-4 items-center px-3 flex-grow md:flex-row hover:cursor-pointer font-inter"
      onClick={() => { handleClick(RecId+"") }}>
      <img src={"https://atlassianblog.wpengine.com/wp-content/uploads/Projectmanagement-1361x760.png"} alt={Name} className="w-32 h-32 object-cover pt-2 md:pt-0" />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-1 text-[#353945]">{Name}</h2>
          <p className="text-sm text-gray-600 mb-2">{Description}</p>
        </div>
        <div className="text-sm text-[#777E90] flex gap-5 justify-between flex-col md:flex-row">
          <div>
            <div className='flex items-center '>
              <img src='/user-shield.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Designer: {DesignManager}</h3>
            </div>
            <div className='flex items-center'>
              <img src='/calendar-blue.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Duration: {calculateDuration(StartDate,EndDate) + " days"}</h3>
            </div>
          </div>
          <div>
            <div className='flex items-center'>
              <img src='/coin-blue.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Budget: {Budget}</h3>
            </div>
            <div className='flex items-center'>
              <img src='square-blue.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Size: {Type}</h3> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
