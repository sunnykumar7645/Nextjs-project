'use client';
import { useState } from 'react';
import { products } from '../product-details';
import Link from 'next/link'

export default function CartPage(){
    const [cardIds] = useState(['123', '345']);

    const cartProduct = cardIds.map(id => products.find(p=>p.id === id)!);
    return (
        <>
            <h1>shopping cart</h1>
            {cartProduct.map(product =>(
                <Link key={product.id} href={"/products/" + product.id} >
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </Link>
            ))}
        </>
    )
}