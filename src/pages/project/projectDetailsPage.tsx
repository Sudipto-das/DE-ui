import { useParams } from 'react-router-dom';
import ProjectDetailsComponent from '../../components/project/ProjectDetailsComponent';
import { useRecoilValue } from 'recoil';
import { projectDataState } from '../../store/projectDataState';


const ProjectDetailsPage = () => {
  const { id } = useParams();
  const projects = useRecoilValue(projectDataState)
  // Find the project by ID
  const project = projects.find((project) => project.ProjId === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetailsComponent project={project} />
  );
};

export default ProjectDetailsPage;
