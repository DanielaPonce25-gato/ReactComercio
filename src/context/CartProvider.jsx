import { CartContext } from "./CartContext";
import { useState } from "react";


function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = item => {
        const isInCart = cart.some(prod => prod.id === item.id)

        if (isInCart) {
            return
        }
    
        setCart([...cart, item])
    }

    const removerCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
       setCart([]);  // vacía el carrito completamente
    };


    // Aumentar cantidad de un producto
    const increQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    // Disminuir cantidad de un producto
    const decreQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.count > 1
                ? { ...item, count: item.count - 1 }
                : item
            )
        );
    };

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
        <CartContext.Provider value={{ 
            addToCart, 
            getQuantity, 
            cart, 
            getTotal, 
            clearCart , 
            removerCart, 
            increQuantity, 
            decreQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider