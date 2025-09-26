import { CartContext } from "./CartContext";
import { useState } from "react";


function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = item => {

        // Para que no agarre productos repetitivos

        if (cart.some(prod => prod.id === item.id)){
            return
        }

        // una funcion que me agregue objetos al carrito

        setCart([...cart, item])
    }

    const getQuantity = () => {
        const quantities = cart.map(item => item.count)
        const total = quantities.reduce((acc, current) => acc + current,0)

        return total
    }
    
    const getTotal = () => {
        const precios = cart.map(item => item.count*item.price)
        const total = precios.reduce((acc, current) => acc + current,0)

        return total
    }

    return(
        <CartContext.Provider value={{ addToCart, getQuantity, cart, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider