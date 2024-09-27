import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/dashboard/header";
import ProjectsList from "../../components/dashboard/projectList";
import CommentsList from "../../components/comments/commentsList";
import { AppContext } from "../../context/Context";
import { useRecoilState, useSetRecoilState } from "recoil";
import getAllProjects from "../../functions/api/dashboard/fetchAllProjects";

import { projectStatusAtom } from "../../store/projectStatus/porjectStatusAtom";
import { projectDataState } from "../../store/projectsState/projectDataState";
import { activeProjectAtom } from "../../store/projectsState/activeProjectState";

const Dashboard: React.FC = () => {
    const setActiveProject = useSetRecoilState(activeProjectAtom);
    const [projects, setProjects] = useRecoilState(projectDataState);

    const { raiseToast, user: CurrentUser } = React.useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const setStatus = useSetRecoilState(projectStatusAtom);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            if (!CurrentUser?.RecId) {
                console.error('RecId missing in CurrentUser');
                return;
            }

            try {
                const response = await getAllProjects(CurrentUser);
                console.log(response);

                if (response?.ProjDetails?.length > 0) {
                    const projectsData = response.ProjDetails;

                    // Set the projects in Recoil atom
                    setProjects(projectsData);

                    // Set the status and active project based on the first project
                    const firstProject = projectsData[0];
                    setStatus(firstProject.Stage); // Assuming STAGE corresponds to `Stage` property
                    setActiveProject(firstProject.RecId); // Assuming RECID corresponds to `RecId` property
                }

                setIsLoading(false);
            } catch (error: any) {
                console.log(error);
                raiseToast(error.message || 'Error fetching projects');
            } finally {
                setIsLoading(false);
            }
        };

        if (projects.length === 0) {
            fetchData();
        }
    }, [CurrentUser, projects.length, setActiveProject, setProjects, setStatus, raiseToast]);
console.log(projects)
    return (
        <>
            <DashboardHeader />
            <div className="flex flex-col gap-3 md:flex-row">
                <div className="w-full md:w-[65%]">
                    <ProjectsList projects={projects} isLoading={isLoading} />
                </div>
                <div className="w-full md:w-[35%]">
                    <CommentsList />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
