import CommentsList from "../../components/comments/commentsList"
import ProductionHeader from "../../components/production/productionHeader"
import FactoriesList from "./FactoriesList"



const ProductionPage: React.FC = () => {
    return <>

        <ProductionHeader />
        <div className="flex gap-3">
            <div className="w-[65%]">
                <FactoriesList/>
            </div>
            <div className="w-[35%]">
                <CommentsList />
            </div>
        </div>
    </>
}
export default ProductionPage