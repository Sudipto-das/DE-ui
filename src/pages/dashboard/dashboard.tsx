import React from "react";
import DashboardHeader from "../../components/dashboard/header";
import ProjectsList from "../../components/dashboard/projectList";
import CommentsList from "../../components/comments/commentsList";

const Dashboard: React.FC = () => {
    return <>
        <DashboardHeader />
        <div className="flex flex-col gap-3 md:flex-row">
            <div className="w-full md:w-[65%]">
                <ProjectsList />
            </div>
            <div className="w-full md:w-[35%]">
                <CommentsList />
            </div>
        </div>
    </>
}
export default Dashboard