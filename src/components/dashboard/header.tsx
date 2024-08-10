import { useEffect, useState } from "react";
import './dashboard.css';
import HeaderBox from "../ui/headerBox";
import { useRecoilValue } from "recoil";
import { projectStatusStringSelector } from "../../store/projectStatus/projectStatusSelector";

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
];

const DashboardHeader: React.FC = () => {
    const [text, setText] = useState("");
    const statusString = useRecoilValue(projectStatusStringSelector)
    const [spinCompleted, setSpinCompleted] = useState(false);
    useEffect(() => {
        const projectStatusIcon = document.getElementById('project-status-icon');
        if (projectStatusIcon) {
            projectStatusIcon.classList.add('spin-scale');
            setTimeout(() => {
                projectStatusIcon.classList.remove('spin-scale');
                setSpinCompleted(true);
            }, 2000);
        }
    }, []);

    useEffect(() => {
        if (spinCompleted) {
            const statusText = statusString;
            statusText.split("").forEach((char, index) => {
                setTimeout(() => {
                    setText(prev => prev + char);
                }, index * 100);
            });
        }
    }, [spinCompleted,statusString]);

    const handleMouseEnter = () => {
        const projectStatusIcon = document.getElementById('project-status-icon');
        if (projectStatusIcon) {
            projectStatusIcon.classList.add('hover-spin');
            setTimeout(() => {
                projectStatusIcon.classList.remove('hover-spin');
            }, 1000);
        }
    };

    return (
        <div className="flex gap-2 flex-col md:flex-row font-inter">
            {HeaderData.map((item, index) => (
                <HeaderBox
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                />
            ))}
            <div className="flex justify-between items-center border rounded-lg px-4 py-4 md:w-[25%] hover:cursor-pointer transition-all duration-300 bg-gradient-to-r from-gray-100 to-gray-300">
                <div>
                    <p className="text-sm font-medium">Project Status</p>
                    <h1 className="text-2xl text-[#EF466F]">
                        {text.split("").map((char, index) => (
                            <span key={index} className="text-animate font-semibold" style={{ animationDelay: `${index * 0.1}s` }}>
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>
                <img 
                    id='project-status-icon' 
                    src='Frame4.png' 
                    className="w-10 h-10 icon-hover" 
                    onMouseEnter={handleMouseEnter} 
                />
            </div>
        </div>
    );
};

export default DashboardHeader;
