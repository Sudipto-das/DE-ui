import ImageGrid from "../../components/ui/imageGrid"
import { MyDesignImageData } from "../../common/my-design"
import { useNavigate } from "react-router-dom"
const MyDesigns = () => {
    const navigate = useNavigate()
    return <div>
        <div className="px-5 py-10 bg-yellow-500 mb-5 rounded-md flex items-center justify-between">
            <h1 className="uppercase text-3xl font-extrabold">My Designs</h1>
            <button
                onClick={() => navigate(-1)}
                className={`flex items-center px-4 py-2 rounded-full shadow-md bg-[#219212] hover:bg-[#1c3b18] `}

            >
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="#ffffff"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-chevron-left">
                        <circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" /></svg>
                </span>
                <span className="font-inter text-lg ml-2 text-white">Go Back</span>

            </button>
        </div>
        <ImageGrid images={MyDesignImageData} />
    </div>
}
export default MyDesigns