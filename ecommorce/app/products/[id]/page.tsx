import NotFoundPage from "@/app/not-found";
import { products } from "@/app/product-details";
import Image from 'next/image'

export default function ProductDetailsPage({ params } : {params : {id:string}}){
    const prod = products.find((p: { id: string }) => p.id === params.id)
    if(!prod){
        return <NotFoundPage/>
    }
    return (
        <>
        <div className="container mx-auto p-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8" >
                <Image className="w-full h-auto rounded-lg shadow-md" src = {'/' + prod.imageUrl} alt ="product image" />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4" >{prod.name}</h1>
                <p className="text-2xl text-gray-600 mb-6" >${prod.price}</p>
                <h3 className="text-2xl font-semibild mb-2" >Description</h3>
                <p className="text-gray-700" >{prod.description}</p>
            </div>

        </div>
    </>
    );
} 