import React from "react";
import DashboardHeader from "../../components/dashboard/header";
import ProjectsList from "../../components/dashboard/projectList";
import CommentsList from "../../components/comments/commentsList";

const Dashboard: React.FC = () => {
    return <>
        <DashboardHeader />
        <div className="flex gap-3">
            <div className="w-[65%]">
                <ProjectsList />
            </div>
            <div className="w-[35%]">
                <CommentsList />
            </div>
        </div>
    </>
}
export default Dashboard