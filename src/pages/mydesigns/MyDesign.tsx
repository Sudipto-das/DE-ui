import  { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context"; // Import your context
import getMyDesigns from "../../functions/api/getMyDesigns";
import ImageGrid from "../../components/ui/imageGrid";
import { UploadedDesignsArray } from "../upload/UploadDocument";


const MyDesigns = () => {
    const navigate = useNavigate();
    const { user: CurrentUser } = useContext(AppContext); // Use your user context
    const [myDesigns, setMyDesigns] = useState<UploadedDesignsArray>([]); // State for storing my designs
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(""); // State for error handling

    // Fetch my designs on component mount
    useEffect(() => {
        const fetchMyDesigns = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const designs = await getMyDesigns({
                    Id: CurrentUser?.Id || '', // Pass user data from context
                    Session: CurrentUser?.Session || '',
                    Token: CurrentUser?.Token || '',
                });
                setMyDesigns(designs.data || []); // Store the fetched designs
            } catch (error) {
                setError("Failed to fetch my designs."); // Set error message
                console.error(error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchMyDesigns();
    }, [CurrentUser]); // Fetch designs when CurrentUser changes

    // Map my designs to the required ImageData type for the ImageGrid component
    const imageData = myDesigns.map(design => ({
        image: design.Attachment, // Ensure this matches your ImageGrid prop
        name: design.Title, // Assuming you want to display a title or name for the image
    }));

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="bg-yellow-500 p-6 rounded-md flex flex-col md:flex-row justify-between items-center mb-8">
                <h1 className="text-2xl font-extrabold uppercase text-center md:text-left">My Designs</h1>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 md:mt-0 flex items-center px-6 py-2 rounded-full shadow-md bg-[#219212] hover:bg-[#1c3b18] transition duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-left">
                        <circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" />
                    </svg>
                    <span className="ml-2 text-lg font-semibold text-white">Go Back</span>
                </button>
            </div>

            {/* Image Grid */}
            <div className="mb-8">
                {loading ? (
                    <p>Loading...</p> // Show loading indicator
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p> // Show error message
                ) : imageData.length === 0 ? (
                    <p className="text-center text-gray-500">No designs found.</p> // Message for empty designs
                ) : (
                    <ImageGrid images={imageData} /> // Pass the mapped image data to ImageGrid
                )}
            </div>
        </div>
    );
};

export default MyDesigns;
