import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CreateProjectComponentProps {
    isOpen: boolean;
    setIsOpen: (arg0: boolean) => void;
}

const CreateProjectComponent: React.FC<CreateProjectComponentProps> = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        budget: '',
        size: '',
        Type: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Project created:', formData);
        setIsOpen(false);
    };

    return (
        <>
            

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div
                        className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Create New Project</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                    placeholder="Enter project title"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                    placeholder="Enter project description"
                                    rows={4}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium">Budget (INR)</label>
                                    <input
                                        type="number"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                        placeholder="Enter budget"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium">Size (sq. ft.)</label>
                                    <input
                                        type="number"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                        placeholder="Enter project size"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Project Type</label>
                                <select
                                    name="projectType"
                                    value={formData.Type}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                    required
                                >
                                    <option value="">Select project type</option>
                                    <option value="G">G</option>
                                    <option value="G+1">G+1</option>
                                    <option value="G+2">G+2</option>
                                </select>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 px-4 py-2 mr-2 transition duration-150"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default CreateProjectComponent;
