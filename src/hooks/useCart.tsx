import { CartContext } from '@/context/cart'
import { CartContextType } from '@/interface'
import React, { useContext } from 'react'

const useCart = () => {
    const context = useContext(CartContext) as CartContextType
    if (context === undefined) throw new Error('useCart must be used whitin a Cartprovider')

    return context
}

export default useCart