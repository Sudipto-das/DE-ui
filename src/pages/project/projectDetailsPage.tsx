import { useParams } from 'react-router-dom';
import ProjectDetailsComponent from '../../components/project/ProjectDetailsComponent';
import { useRecoilValue } from 'recoil';
import { projectDataState } from '../../store/projectDataState';


const ProjectDetailsPage = () => {
  const { id } = useParams();
  const projects = useRecoilValue(projectDataState)
  console.log(projects)
  // Find the project by ID
  const project = projects.find((project) => project.RecId === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetailsComponent project={project} />
  );
};

export default ProjectDetailsPage;
