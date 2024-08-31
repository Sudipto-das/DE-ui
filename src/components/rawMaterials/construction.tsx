import ProductList from "./productList"
import { product } from "../../store/rawMaterailState/productState"
import React from "react"

interface ConstructionComponentProps {
    products: product[]
}

const ConstructionComponent: React.FC<ConstructionComponentProps> = ({ products }) => {
    return <div>
        <ProductList products={products} />

    </div>
}
export default ConstructionComponent