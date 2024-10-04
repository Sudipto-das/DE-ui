import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
import getMyDesigns from "../../functions/api/getMyDesigns";
import ImageGrid from "../../components/ui/imageGrid";
import { UploadedDesignsArray } from "../upload/UploadDocument";

const MyDesigns = () => {
    const navigate = useNavigate();
    const { user: CurrentUser } = useContext(AppContext);
    const [myDesigns, setMyDesigns] = useState<UploadedDesignsArray>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [file, setFile] = useState<File | null>(null); // State to store selected file

    useEffect(() => {
        const fetchMyDesigns = async () => {
            setLoading(true);
            try {
                const designs = await getMyDesigns({
                    Id: CurrentUser?.Id || '',
                    Session: CurrentUser?.Session || '',
                    Token: CurrentUser?.Token || '',
                });
                setMyDesigns(designs.data || []);
            } catch (error) {
                setError("Failed to fetch my designs.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMyDesigns();
    }, [CurrentUser]);

    const imageData = myDesigns.map((design) => ({
        image: design.Attachment,
        name: design.Title,
    }));

    // Handler for showing modal
    const handleUploadClick = () => {
        setShowModal(true);
    };

    // Handler for closing modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Handler for file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    // Handler for file upload (to be implemented with your API)
    const handleUpload = () => {
        if (file) {
            // Implement your file upload logic here
            console.log("Uploading file:", file);
            // After successful upload, you can close the modal
            setShowModal(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="bg-yellow-500 p-6 rounded-md flex flex-col md:flex-row justify-between items-center mb-8">
                <h1 className="text-2xl font-extrabold uppercase text-center md:text-left">My Designs</h1>
                <div className="flex space-x-4">
                    <button
                        onClick={handleUploadClick}
                        className="flex items-center px-6 py-2 rounded-full shadow-md bg-blue-500 hover:bg-blue-700 transition duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-circle">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                        <span className="ml-2 text-lg font-semibold text-white">Upload New Design</span>
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center px-6 py-2 rounded-full shadow-md bg-[#219212] hover:bg-[#1c3b18] transition duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-left">
                            <circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" />
                        </svg>
                        <span className="ml-2 text-lg font-semibold text-white">Go Back</span>
                    </button>


                </div>
            </div>

            {/* Image Grid */}
            <div className="mb-8">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : imageData.length === 0 ? (
                    <p className="text-center text-gray-500">No designs found.</p>
                ) : (
                    <ImageGrid images={imageData} />
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">Upload New Design</h2>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mb-4 border p-2 w-full"
                        />
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseModal}
                                className="px-4 py-2 rounded-full bg-gray-500 text-white hover:bg-gray-700 transition duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpload}
                                className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition duration-200"
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyDesigns;
