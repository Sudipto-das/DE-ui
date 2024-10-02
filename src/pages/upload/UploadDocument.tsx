import { useNavigate } from "react-router-dom";


import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Context";
import getUploadedDesigns from "../../functions/api/fetchUploadedDoc";
import ImageGrid from "../../components/ui/imageGrid";

// types.ts or in the same file
export interface UploadedDesign {
    AccountNum: string;
    Name: string;
    ProjId: string;
    Attachment: string;
    Description: string;
    Title: string;
    Type: number; // Assuming Type is always a number
}

// If you're storing the array of uploaded designs in state
export type UploadedDesignsArray = UploadedDesign[];



const UploadDocuments: React.FC = () => {
    const navigate = useNavigate();
    const { user: CurrentUser } = useContext(AppContext);
    const [uploadedDesigns, setUploadedDesigns] = useState<UploadedDesignsArray>([]); // State for storing uploaded designs
    const [loading, setLoading] = useState(true); // State for loading indicator

    // Fetch uploaded designs on component mount
    useEffect(() => {
        const fetchDesigns = async () => {
            try {
                const designs = await getUploadedDesigns({
                    Id: CurrentUser?.Id || '', // Pass user data from context
                    Session: CurrentUser?.Session || '',
                    Token: CurrentUser?.Token || '',
                });

                setUploadedDesigns(designs.data || []); // Store the fetched designs
            } catch (error) {
                console.error("Failed to fetch uploaded designs:", error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchDesigns();
    }, [CurrentUser]);

    

    // Map uploaded designs to ImageData type
    const imageData = uploadedDesigns.map(design => ({
        name: design.ProjId, // or another unique identifier
        image: design.Attachment
    }));
console.log(imageData)
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="bg-yellow-500 p-6 rounded-md flex flex-col md:flex-row justify-between items-center mb-8">
                <h1 className="text-2xl font-extrabold uppercase text-center md:text-left">Uploaded designs & documents</h1>
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
                    <p>Loading...</p> // Optionally, you can show a loading indicator
                ) : imageData.length === 0 ? (
                    <p className="text-center text-gray-500">No uploaded designs here.</p> // Message for empty uploads
                ) : (
                    <ImageGrid images={imageData} /> // Pass the mapped image data to ImageGrid 
                    
                )}
            </div>
        </div>
    );
};

export default UploadDocuments;
