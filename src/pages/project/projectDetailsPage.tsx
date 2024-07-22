import { useParams } from 'react-router-dom';
import ProjectDetailsComponent from '../../components/project/ProjectDetailsComponent';
import { projects } from '../../common/projects';

const ProjectDetailsPage = () => {
  const { id } = useParams();

  // Find the project by ID
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetailsComponent project={project} />
  );
};

export default ProjectDetailsPage;
