import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import MakePayment from './makePayment';
import { CalculateBudget } from '../../functions/calculateBudget';
import { AppContext } from '../../context/Context';
import createLead from '../../functions/api/projects/createLeads';


interface CreateProjectComponentProps {
    isOpen: boolean;
    setIsOpen: (arg0: boolean) => void;
}

const CreateProjectComponent: React.FC<CreateProjectComponentProps> = ({ isOpen, setIsOpen }) => {
    const { user: CurrentUser } = useContext(AppContext);
    const [formData, setFormData] = useState({
        Title: '',
        Description: '',
        Size: '',
        Type: '',
        Category: '',
    });

    const [showPayment, setShowPayment] = useState(false); 
    const [budget, setBudget] = useState<string>('0'); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'Type' && value === 'interior') {
            setFormData({ ...formData, [name]: value, Category: '' });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const calculatedBudget = CalculateBudget(formData.Type, formData.Category, parseInt(formData.Size));
        const budgetString = calculatedBudget ? calculatedBudget.toString() : '0';

        setBudget(budgetString);

        // Create lead data
        const leadData = {
            Title: formData.Title,
            Description: formData.Description,
            Size: formData.Size,
            Type: formData.Type,
            Category: formData.Category || "none",
            AccountNum: CurrentUser.RecId, // Use CurrentUser.Id here
        };

        try {
            // Call the createLead API
            const response = await createLead(leadData, {
                Id: CurrentUser.Id,
                Session: CurrentUser.Session,
                Token: CurrentUser.Token,
            });
            console.log('Lead created successfully:', response);
            // Show the MakePayment component after successful lead creation
            setShowPayment(true);
        } catch (error) {
            console.error('Error creating lead:', error);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setShowPayment(false);
    };

    return (
        <>
            {isOpen && !showPayment && (
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
                                    name="Title"
                                    value={formData.Title}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                    placeholder="Enter project title"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Description</label>
                                <textarea
                                    name="Description"
                                    value={formData.Description}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                    placeholder="Enter project description"
                                    rows={4}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium">Project Type</label>
                                    <select
                                        name="Type"
                                        value={formData.Type}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                        required
                                    >
                                        <option value="">Select project type</option>
                                        <option value="interior">Interior</option>
                                        <option value="architecture">Architecture</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium">Size (sq. ft.)</label>
                                    <input
                                        type="number"
                                        name="Size"
                                        value={formData.Size}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                        placeholder="Enter project size"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Building Configuration</label>
                                <select
                                    name="Category"
                                    value={formData.Category}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
                                    disabled={formData.Type === 'interior'}
                                    required={formData.Type === 'architecture'}
                                >
                                    <option value="">Select configuration</option>
                                    <option value="G">G</option>
                                    <option value="G+1">G+1</option>
                                    <option value="G+2">G+2</option>
                                </select>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleClose}
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

            {showPayment && <MakePayment formData={formData} budget={budget} closePayment={handleClose} />}
        </>
    );
};

export default CreateProjectComponent;
