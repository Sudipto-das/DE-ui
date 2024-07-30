
import ProjectsList from "../dashboard/projectList";
import { useRecoilValue } from "recoil";
import { projectDataState } from "../../store/projectDataState";

const ProjectComponent = () => {
    const projects = useRecoilValue(projectDataState)
    if (projects?.length > 0) {
        return <ProjectsList />
    }
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


export default ProjectComponent;
