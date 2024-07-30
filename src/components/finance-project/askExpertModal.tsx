import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { askButtonState } from '../../store/askButtonState';
import { motion } from 'framer-motion';

const AskToExpertModal = () => {
    const [isOpen, setIsOpen] = useRecoilState(askButtonState);
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        city: '',
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form Data Submitted: ', formData);
        // You can add form submission logic here
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 font-inter">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md "
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-500 ">Talk With Expert</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                            required
                        />
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-600 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-orange-500 text-slate-100 font-medium px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AskToExpertModal;
