import PartnerList from "../../components/finance-project/PartnerList"
import Slider from "../../components/ui/slider";
const data = [
    'demo1.jpg',
    'demo2.jpg',
    'demo3.jpg',
    
];
const FinancePage = () => {
    return (
        <div className=" border rounded-lg p-6 min-h-screen flex flex-col " >
            <Slider images={data} />
            <PartnerList />
        </div>
    )
}
export default FinancePage