import Image from 'next/image'
import Link from 'next/link';
import { Product } from "@/app/product-details";

export default function ProductsList({ product} : {product : Product[] }){

    return(
        <div>
            {product.map(prod =>(
                <Link key = {prod.id} href={"/products/" + prod.id}>
                    <Image src={'/'+prod.imageUrl} alt = "product-image" width={150} height={150} />
                    <h2>{prod.name}</h2>
                    <p>${prod.price}</p>
                </Link>
            ))}
        </div>
    )
}