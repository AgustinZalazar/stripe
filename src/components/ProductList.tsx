import { IProduct } from '@/interface'
import React from 'react'
import Product from './Product';
import useCart from '@/hooks/useCart';

interface ProductListProps {
    products: IProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
    const { cart } = useCart()
    return (
        <section className='w-full h-full flex flex-col gap-3'>
            <div className=' flex flex-wrap justify-center items-center gap-5 py-3'>
                {products && products.map((product) => {
                    return <Product product={product} key={product.id} />
                })}
            </div>
            <button className='bg-green-600 p-2 rounded-md mx-auto'>{`Checkout (${cart.length}- Items)`}</button>
        </section>
    )
}

export default ProductList