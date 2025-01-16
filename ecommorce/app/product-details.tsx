export interface Product {
    id: string;
    imageUrl:string;
    name: string;
    description: string;
    price:number;
}

export const products : Product[] = [
    {
        id: '123',
        name: 'vercel',
        imageUrl:'vercel.svg',
        description: 'This is vercel',
        price: 30
    },{
        id: '234',
        name: 'globe',
        imageUrl:'globe.svg',
        description: 'This is globe',
        price: 60
    },{
        id: '345',
        name: 'window',
        imageUrl:'window.svg',
        description: 'This is window',
        price: 100
    },{
        id: '456',
        name: 'next',
        imageUrl:'file.svg',
        description: 'This is file',
        price: 45
    },
]