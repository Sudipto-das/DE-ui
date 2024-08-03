import React from "react";
import DashboardHeader from "../../components/dashboard/header";
import ProjectsList from "../../components/dashboard/projectList";
import CommentsList from "../../components/comments/commentsList";

import { projects } from "../../common/projects";
const Dashboard: React.FC = () => {
    // const [projects, setProjects] = useRecoilState(projectDataState);
    // const { raiseToast, user: CurrentUser } = React.useContext(AppContext);
    // const [isLoading, setIsLoading] = useState(false)
    
    // useEffect(() => {
        
    //     const fetchData = async () => {
            
    //         setIsLoading(true)
    //         console.log(CurrentUser?.Id)
    //         if (!CurrentUser?.Id) {
    //             return;
    //         }
    //         try {
    //             const response = await getAllProjects(CurrentUser);
    //             setProjects(response.data);
    //             setIsLoading(false)
    //         } catch (error) {
    //             raiseToast('Error fetching projects');
    //         } finally {
    //             setIsLoading(false)
    //         }
    //     };
    //     if (projects.length === 0) {
    //         fetchData();
    //     }
    // }, [CurrentUser]);
    

    return <>
        <DashboardHeader />
        <div className="flex flex-col gap-3 md:flex-row">
            <div className="w-full md:w-[65%]">
                <ProjectsList projects={projects} isLoading={false} />
            </div>
            <div className="w-full md:w-[35%]">
                <CommentsList/>
            </div>
        </div>
    </>
}
export default Dashboard