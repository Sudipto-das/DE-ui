import React from 'react';
import {  useNavigate } from 'react-router-dom';

import { Projecttype } from '../../common/projects';



const ProjectCard: React.FC<Projecttype> = ({title, description, designer, budget,duration,size,id }) => {
  const navigate = useNavigate()
  
  // console.log(location.pathname)
  // const setProjectRecId = useSetRecoilState(projectRecIdState)
  const handleClick = (id: string) => {
    navigate(`/projects/${id}`)
    console.log('project page')

  }
  // const handleCommentChange = () => {
  //   setProjectRecId(RecId as number)
  //   console.log('dashboard page')
  // }
  // const handleCardClick = () => {
  //   if (location.pathname === '/dashboard') {
  //     handleCommentChange();
  //   } else if (location.pathname === '/projects') {
  //     handleClick(RecId + '');
  //   }
  // };
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-lg overflow-hidden mb-4 items-center px-3 flex-grow md:flex-row hover:cursor-pointer font-inter"
     onClick={()=>handleClick(id)} >
      <img src={"/Rectangle 1.png"} alt='' className="w-32 h-32 object-cover pt-2 md:pt-0" />
      <div className="p-6 flex flex-col justify-between ">
        <div>
          <h2 className="text-xl font-semibold mb-1 text-[#353945]">{title || 'NA'}</h2>
          <p className="text-sm text-gray-600 mb-2">{description || 'NA'}</p>
        </div>
        <div className="text-sm text-[#777E90] flex justify-between flex-col md:flex-row md:gap-10">
          <div >
            <div className='flex items-center '>
              <img src='/user-shield.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Designer: {designer || "NA"}</h3>
            </div>
            <div className='flex items-center'>
              <img src='/calendar-blue.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Duration: {duration || "NA" + " days" }</h3>
            </div>
          </div>
          <div>
            <div className='flex items-center'>
              <img src='/coin-blue.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Budget: {budget || "NA"}</h3>
            </div>
            <div className='flex items-center'>
              <img src='square-blue.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Size: {size || "NA"}</h3> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
