import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
import getMyDesigns from "../../functions/api/getMyDesigns";
import ImageGrid from "../../components/ui/imageGrid";
import { UploadedDesignsArray } from "../upload/UploadDocument";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import Firebase storage functions
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../utils/firebase";

const MyDesigns = () => {
    const navigate = useNavigate();
    const { user: CurrentUser,raiseToast } = useContext(AppContext);
    const [myDesigns, setMyDesigns] = useState<UploadedDesignsArray>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    
    const storage = getStorage(); 

    useEffect(() => {
        
        const fetchMyDesigns = async () => {
            if (!CurrentUser?.Id) return; 
            
            setLoading(true);
            try {
                const designs = await getMyDesigns({
                    Id: CurrentUser.Id,
                    Session: CurrentUser.Session || '',
                    Token: CurrentUser.Token || '',
                });
                setMyDesigns(designs.data || []);
            } catch (error) {
                raiseToast(error)
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

    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    // Handle file upload to Firebase Storage
    const handleFileUpload = () => {
        if (!selectedFile) return;
        
        const storageRef = ref(storage, `uploads/${CurrentUser?.Id}/${selectedFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, selectedFile);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Track upload progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                console.error("Upload failed: ", error);
                setError("Failed to upload file.");
            },
            async () => {
                // Handle successful upload
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log("File available at: ", downloadURL);

                
                try {
                    await addDoc(collection(firestore, "designs"), {
                        userId: CurrentUser?.Id,
                        title: selectedFile.name,
                        fileUrl: downloadURL,
                        fileType: selectedFile.type,
                    });
                    raiseToast("File uploaded successfully!")
                    console.log("File metadata saved in Firestore.");
                } catch (error) {
                    raiseToast("Failed to save metadata")
                    console.error("Failed to save metadata: ", error);
                }

                // Reset file state
                setSelectedFile(null);
                setUploadProgress(null);
            }
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="bg-yellow-500 p-6 rounded-md flex flex-col md:flex-row justify-between items-center mb-8">
                <h1 className="text-2xl font-extrabold uppercase text-center md:text-left">My Designs</h1>
                <div className="flex space-x-4">
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

            {/* Image Uploader */}
            <div className="border-2 border-dashed border-green-700 p-8 rounded-lg mb-8 flex flex-col items-center justify-center">
                <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                            <path d="M16 16v-6a4 4 0 0 0-8 0v6"/><path d="M8 16l-2.34-2.34a2 2 0 0 1 0-2.83l6-6a2 2 0 0 1 2.83 0l6 6a2 2 0 0 1 0 2.83L16 16"/>
                            <line x1="12" y1="19" x2="12" y2="16"/><line x1="12" y1="19" x2="8" y2="19"/><line x1="16" y1="19" x2="12" y2="19"/>
                        </svg>
                        <span className="text-gray-600">Choose or Drop a File (Image, PDF, or Video)</span>
                    </div>
                    <input 
                        id="file-upload" 
                        type="file" 
                        accept="image/*,video/*,.pdf" 
                        className="hidden" 
                        onChange={handleFileChange} 
                    />
                </label>
                {selectedFile && (
                    <div className="mt-4 text-gray-600">Selected file: {selectedFile.name}</div>
                )}
                <button
                    onClick={handleFileUpload}
                    className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-700 font-semibold"
                    disabled={!selectedFile}
                >
                    Upload File
                </button>
                {uploadProgress !== null && <p>Upload Progress: {Math.round(uploadProgress)}%</p>}
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
        </div>
    );
};

export default MyDesigns;
