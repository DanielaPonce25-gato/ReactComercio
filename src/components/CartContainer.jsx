import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router"
import { ListGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button"

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
            <div>No tienes productos en el carrito</div>
        )
    }

    return (
        <div className='d-flex flex-column mt-5 align-items-center'>
            <ListGroup className='w-50'>
                {cart.map(item => (
                    <ListGroup.Item 
                        key={item.id} 
                        className="d-flex justify-content-between align-items-center"
                    >
                        <div>
                            {item.name} x {item.count} = ${item.price * item.count}
                        </div>
                        <div className="d-flex gap-2">
                            <Button 
                                variant="success" 
                                size="sm" 
                                onClick={() => increQuantity(item.id)}
                            >
                                +
                            </Button>
                            <Button 
                                variant="warning" 
                                size="sm" 
                                onClick={() => decreQuantity(item.id)}
                            >
                                -
                            </Button>
                            <Button 
                                variant="danger" 
                                size="sm" 
                                onClick={() => removerCart(item.id)}
                            >
                                Eliminar
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <h2 className="mt-3">Subtotal: ${total}</h2>

            <div className="d-flex flex-column gap-2 w-50 mt-4">
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