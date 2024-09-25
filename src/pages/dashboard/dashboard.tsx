import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/dashboard/header";
import ProjectsList from "../../components/dashboard/projectList";
import CommentsList from "../../components/comments/commentsList";
import { AppContext } from "../../context/Context";
import { useRecoilState, useSetRecoilState } from "recoil";
import getAllProjects from "../../functions/api/dashboard/fetchAllProjects";
import { transformApiResponse } from "../../interface/Project";
import { projectStatusAtom } from "../../store/projectStatus/porjectStatusAtom";
import { projectDataState } from "../../store/projectsState/projectDataState";
import { activeProjectAtom } from "../../store/projectsState/activeProjectState";


const Dashboard: React.FC = () => {

    const setActiveProject = useSetRecoilState(activeProjectAtom)
    const [projects, setProjects] = useRecoilState(projectDataState);

    const { raiseToast, user: CurrentUser } = React.useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false)
    const setStatus = useSetRecoilState(projectStatusAtom);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            
            
            if (!CurrentUser?.Id) {
                console.error('RecId missing in CurrentUser');
                return;
            }
    
            try {
                const response = await getAllProjects(CurrentUser);
                console.log(response)
                const transformedData = transformApiResponse(response.data);
                setProjects(transformedData);
    
                if (transformedData.projDetails.length > 0) {
                    
                    setStatus(transformedData.projDetails[0].STATUS);
                    setActiveProject(transformedData.projDetails[0].RECID);
                }
    
                setIsLoading(false);
            } catch (error: any) {
                
                raiseToast(error.message || 'Error fetching projects');
            } finally {
                setIsLoading(false);
            }
        };
    
        if (projects.projDetails.length === 0) {
            fetchData();
        }
    }, [CurrentUser]);
    
    
    


    return <>
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
}
export default Dashboard


