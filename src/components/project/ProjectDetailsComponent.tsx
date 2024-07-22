import React from "react";
import { projectData } from "../../store/projectDataState";
import HeaderBox from "../ui/headerBox";
import Slider from "../ui/slider";

interface ProjectDetailsComponentProps {
  project: projectData;
}

const ProjectDetailsComponent: React.FC<ProjectDetailsComponentProps> = ({ project }) => {
  const projectDetails = [
    { title: 'Designer', subtitle: project.designer, icon: '/Avatar.png' },
    { title: 'Duration', subtitle: project.duration, icon: '/date.png' },
    { title: 'Budget', subtitle: project.budget, icon: '/budget-breakdown.png' },
    { title: 'Size', subtitle: project.size, icon: '/measurement.png' },
  ];
  const images = ['/project/1.jpeg','/project/2.jpg','/project/3.jpg','/project/4.jpg']
console.log(project.image)
  return (
    <div className="flex flex-col gap-6 p-6 bg-white shadow-md rounded-lg">
      {/* Project Image */}
      <div className="w-full rounded-lg overflow-hidden">
        <Slider images={images}/>
      </div>

      {/* Project Title and Description */}
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="text-gray-600">{project.description}</p>
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
