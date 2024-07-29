import React, { useEffect, useState } from 'react';
import ProjectCard from './projectCard';
import { AppContext } from '../../context/Context';
import getAllProjects from '../../functions/api/dashboard/fetchAllProjects';

const ProjectsList: React.FC = () => {
    const [projects, setProjects] = useState<>([]);
    const {
        setLoading,
        raiseToast,
        user: CurrentUser,
    } = React.useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {

            
            setLoading(true);
            if (!CurrentUser?.Id) {
                return;
            }
            try {
                const response = await getAllProjects(CurrentUser);
                setProjects(response.data);
            } catch (error) {
                raiseToast('Error fetching projects');
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [CurrentUser]);

    return (
        <div className='p-4 border rounded-lg mt-4 font-inter' style={{ height: 'calc(88vh - 90px)' }}>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-xl font-bold text-slate-600'>Projects</h1>
                <button className='text-blue-500 hover:underline text-sm font-semibold'>SEE MORE</button>
            </div>
            <div className="overflow-y-auto h-[92%]">
                {/* {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))} */}
            </div>
        </div>
    )
}

export default ProjectsList;
