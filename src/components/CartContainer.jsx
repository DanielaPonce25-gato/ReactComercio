import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router"
import { ListGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button"

function CartContainer () {
    const { cart, getTotal } = useContext(CartContext)
    const total = getTotal()
    const navigate = useNavigate()

    if (cart.length === 0) {
        return(
            <div>No tienes productos en el carrito</div>
        )
    }

    return (
        <div className='d-flex flex-column mt-5 align-items justify-content-center'>
            <ListGroup className='w-50'>
                {cart.map(item => (
                    <ListGroup.Item key={item.id}>
                        {item.name} x {item.count}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h2 className="mt-3">Subtotal: ${total}</h2>
            <Button 
                className="w-50 mt-5"
                onClick={() => navigate('/checkout')}
            >
                Comprar
            </Button>
        </div>
    )
}

export default CartContainer