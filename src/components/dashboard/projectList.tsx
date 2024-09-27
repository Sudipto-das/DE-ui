import ProjectCard from './projectCard';

import Loader from '../ui/loader';
import { ProjectDetail } from '../../interface/Project';


interface ProjectsListProps {
    projects: ProjectDetail[];
    isLoading: boolean;
}

const ProjectsList: React.FC<ProjectsListProps> = ({projects,isLoading}) => {

    return (
        <div className='p-4 border rounded-lg mt-4 font-inter h-[calc(100vh-8rem)] md:h-[calc(100vh-13rem)]'>
            <div className='flex justify-between items-center mb-1'>
                <h1 className='text-xl font-bold text-slate-600'>Projects</h1>
                
            </div>
            <div className="w-full h-[95%] flex flex-col overflow-y-auto">
                {isLoading ? (
                    <div className='p-4 border rounded-lg mt-4 font-inter h-[calc(100vh-8rem)] md:h-[calc(100vh-13rem)] flex items-center justify-center'>
                        <Loader />
                    </div>
                ):(
                    <>
                    {projects.length === 0 ? (
                    <div className="flex justify-center items-center w-full h-full text-center text-gray-500">
                        No projects yet
                    </div>
                ) : (
                    <div className="w-full space-y-4">
                        {projects && projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                )} 
                    </>
                )}
            </div>
        </div>
    );
};
export default ProjectsList;