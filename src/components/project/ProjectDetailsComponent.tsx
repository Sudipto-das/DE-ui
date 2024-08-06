import React from "react";

import HeaderBox from "../ui/headerBox";
import Slider from "../ui/slider";
import { calculateDuration } from "../../functions/durationCalc";
import { ProjectDetail} from "../../interface/Project";

interface ProjectDetailsComponentProps {
  project: ProjectDetail;
}

const ProjectDetailsComponent: React.FC<ProjectDetailsComponentProps> = ({ project }) => {
  const projectDetails = [
    { title: 'Designer', subtitle: project.NAME, icon: '/Avatar.png' },
    { title: 'Duration', subtitle: calculateDuration(project.STARTDATE,project.ENDDATE) + " days", icon: '/date.png' },
    { title: 'Budget', subtitle: project.BUDGET, icon: '/budget-breakdown.png' },
    { title: 'Size', subtitle: project.TYPE, icon: '/measurement.png' },
  ];
  const images = ['/project/1.jpeg', '/project/2.jpg', '/project/3.jpg', '/project/4.jpg']
  
  return (
    <div className="flex flex-col gap-6 p-6 bg-white shadow-md rounded-lg">
      {/* Project Image */}
      <div className="w-full rounded-lg overflow-hidden">
        <Slider images={images} />
      </div>

      {/* Project Title and Description */}
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{project.NAME}</h1>
        <p className="text-gray-600">{project.DESCRIPTION}</p>
      </div>

      {/* Project Details */}
      <div className="flex gap-3 flex-col md:flex-row">
        {projectDetails.map((detail, index) => (
          <HeaderBox
            key={index}
            title={detail.title}
            subtitle={detail.subtitle}
            icon={detail.icon}
          />
        ))}
      </div>

    </div>
  );
}

export default ProjectDetailsComponent;
