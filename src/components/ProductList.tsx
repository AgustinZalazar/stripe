import { IProduct } from '@/interface'
import React from 'react'
import Product from './Product';

interface ProductListProps {
    products: IProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className='h-screen flex flex-wrap justify-center items-center gap-5 py-3'>
            {products && products.map((product) => {
                return <Product product={product} key={product.id} />
            })}
        </div>
    )
}

export default ProductList