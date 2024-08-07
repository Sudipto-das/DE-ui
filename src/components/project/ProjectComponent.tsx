import ProjectsList from "../dashboard/projectList";
import { useRecoilState } from "recoil";

import { AppContext } from "../../context/Context";
import React, { useEffect, useState } from "react";
import getAllProjects from "../../functions/api/dashboard/fetchAllProjects";
import { projectDataState } from "../../store/projectsState/projectDataState";

const ProjectComponent: React.FC = () => {
    const [projects, setProjects] = useRecoilState(projectDataState);
    const { raiseToast, user: CurrentUser } = React.useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (!CurrentUser?.Id) {
                return;
            }
            try {
                const response = await getAllProjects(CurrentUser);
                setProjects(response.data);
            } catch (error) {
                raiseToast('Error fetching projects');
            } finally {
                setIsLoading(false);
            }
        };

        if (projects.projDetails.length === 0) {
            fetchData();
        }
    }, [CurrentUser, setProjects, raiseToast]);



    if (!isLoading && projects.projDetails.length === 0) {
        return (
            <div className="flex items-center justify-center border rounded-lg" style={{ height: 'calc(94vh - 88px)' }}>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="w-full text-center px-4">
                        <h3 className="text-sm">You Have No Current Projects. Create Your First Project Now</h3>
                    </div>
                    <button className="px-7 py-5 text-xl font-bold bg-gradient-to-r from-green-700 to-blue-900 rounded-lg shadow-2xl text-slate-200">
                        Create Your Project
                    </button>
                </div>
            </div>
        );
    }

    return <ProjectsList projects={projects} isLoading={isLoading} />;
}

export default ProjectComponent;