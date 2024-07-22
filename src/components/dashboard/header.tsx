import { useEffect } from "react";
import './dashboard.css';
import HeaderBox from "../ui/headerBox";
const HeaderData = [
    {
        title: 'Shortlisted Inspiration',
        subtitle: 'Style Quiz',
        icon: 'Frame.png'
    },
    {
        title: 'My design',
        subtitle: '5568',
        icon: 'Frame2.png'
    },
    {
        title: 'Upload design & document',
        subtitle: '5672',
        icon: 'Frame3.png'
    },
    
]
const DashboardHeader: React.FC = () => {

    useEffect(() => {

        const projectStatusIcon = document.getElementById('project-status-icon');
        if (projectStatusIcon) {
            projectStatusIcon.classList.add('spin');
            setTimeout(() => {
                projectStatusIcon.classList.remove('spin');
            }, 2000);
        }
    }, []);
    const handleMouseEnter = () => {
        const projectStatusIcon = document.getElementById('project-status-icon');
        if (projectStatusIcon) {
            projectStatusIcon.classList.add('hover-spin');
            setTimeout(() => {
                projectStatusIcon.classList.remove('hover-spin');
            }, 1000);
        }
    };
    return <>
        <div className="flex gap-2 flex-col md:flex-row">
            {HeaderData.map((item, index) => (
                <HeaderBox
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                />
            ))}
            <div className="flex justify-between items-center border rounded-lg px-4 py-4 md:w-[25%] hover:cursor-pointer">
                <div>
                    <p className="text-sm font-medium">Project Status</p>
                    <h1 className="text-2xl text-[#EF466F]">Pending</h1>
                </div>
                <img id='project-status-icon' src='Frame4.png' className="w-10 h-10 hover-spin" onMouseEnter={handleMouseEnter} />
            </div>
        </div>
    </>
}
export default DashboardHeader;