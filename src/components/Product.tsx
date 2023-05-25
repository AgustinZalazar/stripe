import useCart from '@/hooks/useCart'
import { IProduct } from '@/interface'
import Image from 'next/image'
import React from 'react'

interface ProductProps {
    product: IProduct,
}

const Product = ({ product }: ProductProps) => {
    const { cart, addToCart, deleteItemCart } = useCart()
    const productExist = cart.findIndex(item => item.id === product.id)
    return (
        <div className="w-full min-h-[476px] max-w-sm flex flex-col justify-evenly items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="p-8 rounded-t-lg" src={product.images[0]} alt={product.name} width={320} height={220} />
            <div className="w-full px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name.toLocaleUpperCase()}</h5>
                <div className="flex flex-col items-left justify-between gap-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    {productExist ?
                        <button onClick={() => addToCart(product)} className="text-white bg-black hover:bg-slate-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Buy item</button>
                        :
                        <button onClick={() => deleteItemCart(product)} className="text-white  bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove item</button>
                    }
                </div>
            </div>
        </div>)

}

export default Product