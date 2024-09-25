import React, { useState } from 'react';
interface CreateProjectComponentProps {
    isOpen:boolean
    setIsOpen:(arg0: boolean)=>void
}
const CreateProjectComponent:React.FC<CreateProjectComponentProps> = ({isOpen,setIsOpen}) => {
    
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        budget: '',
        size: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle project creation logic here
        console.log('Project created:', formData);
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
                Create Project
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Create New Project</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                    placeholder="Enter project title"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                    placeholder="Enter project description"
                                    rows={4}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700">Budget ($)</label>
                                    <input
                                        type="number"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                        placeholder="Enter budget"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Size (sq. ft.)</label>
                                    <input
                                        type="number"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                        placeholder="Enter project size"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 px-4 py-2 mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateProjectComponent;
