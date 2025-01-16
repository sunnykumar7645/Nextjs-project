import { products } from "@/app/product-details";
import ProductsList from "../product-list";

export default function ProductPage(){
    return (
        <>
            <h1>Products</h1>
            <ProductsList product={products}/>
        </>
    )
}
