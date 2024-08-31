import ProductList from "./productList"
import { interiorProducts } from "../../common/interiorProducts"
import { product } from "../../store/rawMaterailState/productState"
interface InteriorComponentProps {
    products:product[]
}

const InteriorComponent:React.FC<InteriorComponentProps> = ({products}) =>{
    return <div>
        <ProductList products={products}/>
    </div>
}

export default InteriorComponent