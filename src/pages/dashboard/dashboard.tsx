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
import { HiOutlineChatAlt2 } from "react-icons/hi"; // Importing a chat icon

const Dashboard: React.FC = () => {
    const setActiveProject = useSetRecoilState(activeProjectAtom);
    const [projects, setProjects] = useRecoilState(projectDataState);
    const { raiseToast, user: CurrentUser } = React.useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const setStatus = useSetRecoilState(projectStatusAtom);

    const [isCommentsVisible, setCommentsVisible] = useState(false); // State to control comments visibility on small devices

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            if (!CurrentUser?.RecId) {
                return;
            }

            try {
                const response = await getAllProjects(CurrentUser);

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
                raiseToast(error.message || "Error fetching projects");
            } finally {
                setIsLoading(false);
            }
        };

        if (projects.length === 0) {
            fetchData();
        }
    }, [CurrentUser, projects.length, setActiveProject, setProjects, setStatus, raiseToast]);

    return (
        <>
            <DashboardHeader />
            <div className="flex flex-col gap-3 md:flex-row">
                <div className="w-full md:w-[65%]">
                    <ProjectsList projects={projects} isLoading={isLoading} />
                </div>

                {/* This section is only shown on larger devices */}
                <div className="hidden md:block w-full md:w-[35%]">
                    <CommentsList />
                </div>

                {/* For small devices, show the message icon and toggle comments */}
                <div className="fixed bottom-5 right-5 md:hidden">
                    <button
                        className="bg-green-500 p-3 rounded-full text-white shadow-lg focus:outline-none"
                        onClick={() => setCommentsVisible(!isCommentsVisible)}
                    >
                        <HiOutlineChatAlt2 className="h-6 w-6" />
                    </button>
                </div>

                {/* Conditionally render the CommentsList when the icon is clicked on small devices */}
                {isCommentsVisible && (
                    <div className="fixed inset-0 z-50 bg-white p-4">
                        <button
                            className="text-gray-500 text-lg mb-4"
                            onClick={() => setCommentsVisible(false)}
                        >
                            Close
                        </button>
                        <CommentsList />
                    </div>
                )}
            </div>
        </>
    );
};

export default Dashboard;
