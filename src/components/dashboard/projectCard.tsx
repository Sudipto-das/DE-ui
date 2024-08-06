import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { calculateDuration } from '../../functions/durationCalc';
import { useSetRecoilState } from 'recoil';
import { ProjectDetail } from '../../interface/Project';
import { projectStatusAtom } from '../../store/projectStatus/porjectStatusAtom';
import { activeProjectAtom } from '../../store/projectsState/activeProjectState';
import { projectRecIdState } from '../../store/projectsState/projectRecId';

const ProjectCard: React.FC<ProjectDetail> = ({ NAME, RECID, DESCRIPTION, BUDGET, STARTDATE, ENDDATE, TYPE, ASSIGNEDMANAGER, STATUS }) => {
  const [activeProject, setActiveProject] = useRecoilState(activeProjectAtom);
  const setStatus = useSetRecoilState(projectStatusAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const setProjectRecId = useSetRecoilState(projectRecIdState);

  const handleClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

  const handleCommentChange = () => {
    setProjectRecId(RECID as string);
    setStatus(STATUS);
  };

  const handleCardClick = () => {
    setActiveProject(RECID); // Set the active project
    if (location.pathname === '/dashboard') {
      handleCommentChange();
    } else if (location.pathname === '/projects') {
      handleClick(RECID + '');
    }
  };

  const isActive = location.pathname === '/dashboard' && activeProject === RECID;

  return (
    <div className={`flex flex-col border ${isActive ? 'border-[#259fb7]' : 'border-gray-300'} shadow-sm rounded-lg overflow-hidden mb-4 items-center px-3 flex-grow md:flex-row hover:cursor-pointer font-inter`}
      onClick={handleCardClick}>
      <img src={"/Rectangle 1.png"} alt={NAME} className="w-32 h-32 object-cover pt-2 md:pt-0" />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-1 text-[#353945]">{NAME || 'NA'}</h2>
          <p className="text-sm text-gray-600 mb-2">{DESCRIPTION || 'NA'}</p>
        </div>
        <div className="text-sm text-[#777E90] flex justify-between flex-col md:flex-row md:gap-10">
          <div>
            <div className='flex items-center '>
              <img src='/user-shield.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Designer: {ASSIGNEDMANAGER?.DesignManager || "NA"}</h3>
            </div>
            <div className='flex items-center'>
              <img src='/calendar-blue.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Duration: {calculateDuration(STARTDATE, ENDDATE) || "NA"}</h3>
            </div>
          </div>
          <div>
            <div className='flex items-center'>
              <img src='/coin-blue.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Project Budget: {BUDGET || "NA"} $</h3>
            </div>
            <div className='flex items-center'>
              <img src='square-blue.png' className="w-3.5 h-3.5 mr-3" />
              <h3>Size: {TYPE || "NA"}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
