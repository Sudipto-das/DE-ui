import ProductList from "./productList"
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