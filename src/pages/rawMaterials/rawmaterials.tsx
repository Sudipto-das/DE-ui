import React from "react";
import ProductList from "../../components/rawMaterials/productList";
import { products } from "../../common/product";

const RawMaterials:React.FC = ()=>{
    return <div>
        <ProductList products={products}/>
    </div>
}
export default RawMaterials