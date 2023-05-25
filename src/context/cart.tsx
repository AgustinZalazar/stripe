import { CartContextType, IProduct } from "@/interface";
import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext<CartContextType | null>(null)

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<IProduct[]>([])
    const addToCart = (product: IProduct) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex === -1) {
            setCart(prevState => ([...prevState, product]))
        }
    }
    const deleteItemCart = (product: IProduct) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            setCart(cart.filter(item => item.id !== product.id))
        }
    }
    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            deleteItemCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider