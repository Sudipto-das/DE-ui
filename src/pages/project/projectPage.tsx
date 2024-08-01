import React from "react";
import ProjectComponent from "../../components/project/ProjectComponent";
import { AppContext } from "../../context/Context";

const ProjectPage = () => {
    const {  user: CurrentUser } = React.useContext(AppContext);
    console.log(CurrentUser)
    return (
        <>
        <ProjectComponent/>
        </>
    )
}
export default ProjectPage;