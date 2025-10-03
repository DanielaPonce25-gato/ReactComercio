import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import { useNavigate } from 'react-router';
import styles from "../styles/Checkout.module.css"

function Checkout () {
    const { getTotal, cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target

        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        const order = {
            buyer: { email, name, phone},
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        }

        const ok = await createOrder(order);

        if (ok) {
                clearCart();     
                navigate('/');   
        }
    }

    if (!cart.length) {
        return <div>No tienes productos en el carrito </div>
    }

    return(
        <div className='d-flex justify-content-center mt-5'>
            <Form className='w-50' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required defaultValue={'manuelitaperez@gmail.com'}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Manuelita Perez" required defaultValue={'Manuelita Perez'}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="+5491260457830" required defaultValue={'+5491260457830'}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Checkout