import { IProduct } from '@/interface'
import React from 'react'
import Product from './Product';
import CheckoutForm from './CheckoutForm';

interface ProductListProps {
    products: IProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <section className='w-full h-full flex flex-col gap-3'>
            <div className=' flex flex-wrap justify-center items-center gap-5 py-3'>
                {products && products.map((product) => {
                    return <Product product={product} key={product.id} />
                })}
            </div>
            <CheckoutForm />
        </section>
    )
}

export default ProductList