import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router"
import { ListGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import styles from "../styles/CartContainer.module.css"

function CartContainer () {
    const { 
        cart, 
        getTotal, 
        removerCart, 
        increQuantity, 
        decreQuantity, 
        clearCart 
    } = useContext(CartContext)

    const total = getTotal()
    const navigate = useNavigate()

    if (cart.length === 0) {
        return (
            <div className={styles.mensaje}>No tienes productos en el carrito</div>
        )
    }

    return (
        <div className={styles.conteiner}>
            <ListGroup className={styles.carrito}>
                {cart.map(item => (
                    <ListGroup.Item className={styles.productos}
                        key={item.id} 
                        
                    >
                        <div className={styles.producto}>
                            {item.name} x {item.count} = ${item.price * item.count}
                        </div>
                        <div className={styles.botones}>
                            <Button className={styles.boton}
                                variant="info"
                                onClick={() => increQuantity(item.id)}
                            >
                                +
                            </Button>
                            <Button className={styles.boton}
                                variant="secondary" 
                                onClick={() => decreQuantity(item.id)}
                            >
                                -
                            </Button>
                            <Button className={styles.eliminar} 
                                variant="danger" 
                                size="ms" 
                                onClick={() => removerCart(item.id)}
                            >
                                Eliminar
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <h2 className={styles.subtotal}>Subtotal: ${total}</h2>

            <div className={styles.botonesFinales}>
                <Button 
                    variant="primary" 
                    onClick={() => navigate('/checkout')}
                >
                    Comprar
                </Button>
                <Button 
                    variant="outline-danger" 
                    onClick={() => {
                        clearCart()
                        navigate('/')
                    }}
                >
                    Vaciar carrito y volver al inicio
                </Button>
            </div>
        </div>
    )
}

export default CartContainer