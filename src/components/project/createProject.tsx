import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MakePayment from './makePayment';
import { CalculateBudget } from '../../functions/calculateBudget';
import { AppContext } from '../../context/Context';
import createLead from '../../functions/api/projects/createLeads';
import getProjectTypes from '../../functions/api/projects/getProjType';
import getProjectCategory from '../../functions/api/projects/getProjectCategory'; // Import project category function
interface CreateProjectComponentProps {
    isOpen: boolean;
    setIsOpen: (arg0: boolean) => void;
}

interface ProjectType {
    Name: string;
    RecId: string;
}

interface ProjectCategory {
    Name: string;
    RecId: string;
}

const CreateProjectComponent: React.FC<CreateProjectComponentProps> = ({ isOpen, setIsOpen }) => {
    const { user: CurrentUser, raiseToast } = useContext(AppContext); // Get raiseToast from context
    const [formData, setFormData] = useState({
        Title: '',
        Description: '',
        Size: '',
        Type: '',
        Category: '',
    });

    const [showPayment, setShowPayment] = useState(false);
    const [budget, setBudget] = useState<string>('0');
    const [projectTypes, setProjectTypes] = useState<ProjectType[]>([]); // State for project types
    const [projectCategories, setProjectCategories] = useState<ProjectCategory[]>([]); // State for project categories

    useEffect(() => {
        // Fetch project types when component mounts
        const fetchProjectTypes = async () => {
            try {
                const response = await getProjectTypes({
                    Id: CurrentUser.Id,
                    Session: CurrentUser.Session,
                    Token: CurrentUser.Token,
                });

                const types = response.data.map((type: any) => ({
                    Name: type.Name,
                    RecId: type.RecId,
                }));

                setProjectTypes(types);
            } catch (error) {
                console.error('Error fetching project types:', error);
            }
        };

        fetchProjectTypes();
    }, [CurrentUser]);

    useEffect(() => {
        // Fetch categories when the Type is selected
        const fetchProjectCategories = async () => {
            if (formData.Type) {
                try {
                    const response = await getProjectCategory({
                        Id: CurrentUser.Id,
                        Session: CurrentUser.Session,
                        Token: CurrentUser.Token,  
                    }, formData.Type);  // Pass selected Type to the API

                    const categories = response.data.map((category: any) => ({
                        Name: category.Name,
                        RecId: category.RecId,
                    }));

                    setProjectCategories(categories);
                } catch (error) {
                    console.error('Error fetching project categories:', error);
                }
            } else {
                setProjectCategories([]); // Clear categories if no type is selected
            }
        };

        fetchProjectCategories();
    }, [formData.Type, CurrentUser]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Reset Category when Type is changed
        if (name === 'Type') {
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
    
        const leadData = {
            Title: formData.Title,
            Description: formData.Description,
            Size: formData.Size,
            Type: formData.Type,
            Category: formData.Category || "none",
            AccountNum: CurrentUser.RecId,
        };
    
        try {
            const response = await createLead(leadData, {
                Id: CurrentUser.Id,
                Session: CurrentUser.Session,
                Token: CurrentUser.Token,
            });
            console.log('Lead created successfully:', response);
            setShowPayment(true);
        } catch (error: any) {
            // Check if the error has a response with a data object, then extract the message
            let errorMessage = 'Something went wrong';
            
            if (error.response && typeof error.response.data === 'object') {
                errorMessage = error.response.data.message || JSON.stringify(error.response.data);
            } else if (error.message) {
                errorMessage = error.message;
            }
    
            // Use raiseToast function to display the error message
            raiseToast('Error', 'error', errorMessage);
            console.error(errorMessage);
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
                                        {projectTypes.map((type) => (
                                            <option key={type.RecId} value={type.Name}>
                                                {type.Name}
                                            </option>
                                        ))}
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
                                    required={formData.Type !== 'interior'}
                                    disabled={formData.Type === 'interior'}
                                >
                                    <option value="blank">Select configuration</option>
                                    {projectCategories.map((category) => (
                                        <option key={category.RecId} value={category.Name}>
                                            {category.Name}
                                        </option>
                                    ))}
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
