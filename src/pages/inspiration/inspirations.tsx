import { useRecoilState } from "recoil";
import InspirationsHeader from "../../components/inspirations/inspirationsHeader"
import { selectedCategoryState } from "../../store/selectCatagoryState";
import { useEffect } from "react";
import InteriorPage from "../../components/inspirations/Interior/interior";

const InspirationsPage = () => {
    const [selectedCategory, setSelectedCatagory] = useRecoilState(selectedCategoryState);
    useEffect(() => {
        setSelectedCatagory('Interior')
    }, [])
    let renderComponent;
    switch (selectedCategory) {
        case 'Interior':
            renderComponent = <InteriorPage />;
            break;
        case 'Architecture':
            renderComponent = null;
            break;
        case 'Saved Designs':
            renderComponent = null;
            break;


        default:
            renderComponent = null;
    }
    return (
        <>
            <InspirationsHeader  renderComponent={renderComponent}/>
            <div className="md:flex gap-3 flex-col md:flex-row">
            <div className="hidden md:block">
                    {renderComponent}
                </div>
            </div>
        </>
    )
}
export default InspirationsPage