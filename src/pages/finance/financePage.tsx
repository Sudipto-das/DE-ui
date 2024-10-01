import { useRecoilValue } from "recoil";
import PartnerList from "../../components/finance-project/PartnerList"
import AskExpartButton from "../../components/finance-project/askExpartButton";
import Slider from "../../components/ui/slider";
import { askButtonState } from "../../store/askButtonState";
import AskToExpertModal from "../../components/finance-project/askExpertModal";
import LoanForm from "../../components/finance-project/loanForm";
const data = [
    'demo1.jpg',
    'demo2.jpg',
    'demo3.jpg',
    
];
const FinancePage = () => {
    const isOpen = useRecoilValue(askButtonState)
    return (
        <div className=" border rounded-lg p-6 min-h-screen flex flex-col " >
            <div className="flex justify-end"><AskExpartButton/></div>
            <Slider images={data} />
            <PartnerList />
            <LoanForm/>
            {isOpen && <AskToExpertModal/>}
        </div>
    )
}
export default FinancePage