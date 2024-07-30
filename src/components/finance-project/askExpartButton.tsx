import { useRecoilState, } from "recoil"
import { askButtonState } from "../../store/askButtonState"

const AskExpartButton = () => {
    const [askToExpertModal, setAskToExpertModal] = useRecoilState(askButtonState)
    const handleClick = () => {
        setAskToExpertModal(!askToExpertModal)
    }
    return <div className="font-inter">
        <button className="border-none text-blue-600 mb-2 font-semibold flex text-sm gap-1 items-center" onClick={handleClick}>Talk To Expert
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-question"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg></span>
        </button>
    </div>
}
export default AskExpartButton