import { motion } from 'framer-motion';
import { ProjStatus } from '../../store/projectStatus/porjectStatusAtom';
import { projectStatusStringSelector } from '../../store/projectStatus/projectStatusSelector';
import { useRecoilValue } from 'recoil';
import React from 'react';

const StatusView = () => {
    const statusString = useRecoilValue(projectStatusStringSelector);

    const statusStrings = Object.keys(ProjStatus)
        .filter(key => isNaN(Number(key))) // Filter out the numeric keys
        .map(key => ({
            name: key.replace(/([A-Z])/g, ' $1').trim(),
            value: ProjStatus[key as keyof typeof ProjStatus]
        }))
        .sort((a, b) => a.value - b.value);

    const currentStatusIndex = statusStrings.findIndex(status => status.name === statusString);

    // Calculate the percentage width of the green line to end exactly at the current status dot
    const lineWidthPercentage = (currentStatusIndex / (statusStrings.length - 1)) * 100;

    return (
        <div className="relative flex items-center w-full">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-9 right-9 h-1 bg-gray-300">
                {/* Highlighted part of the line with animation */}
                <motion.div
                    className="h-1 bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${lineWidthPercentage}%` }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                ></motion.div>
            </div>

            {statusStrings.map((status, index) => (
                <div key={index} className="flex flex-col items-center relative z-10 mt-14" style={{ flex: 1 }}>
                    {/* Dot with animation */}
                    <motion.div
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${index <= currentStatusIndex ? 'bg-green-500 text-white' : 'bg-gray-300 text-white'
                            }`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.5 }}
                    >
                        <span>&bull;</span>
                    </motion.div>
                    {/* Status Name */}
                    <span className="mt-3 text-gray-700 text-center text-xs" style={{ minHeight: '42px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                        {status.name}
                    </span>
                </div>
            ))}
        </div>
    );
};
interface StatusModalProps {
    onClose: () => void
}

const StatusModal: React.FC<StatusModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 font-inter">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                    <img src="close.png" alt="" className='w-6 h-6' />
                </button>
                <div>
                    <h1 className="text-xl font-bold mb-4">Project Status Timeline</h1>
                    <StatusView />
                </div>
            </motion.div>
        </div>
    );
};

export default StatusModal;
