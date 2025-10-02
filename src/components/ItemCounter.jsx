import { useState , useContext} from "react";
import { CartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';
import styles from "../styles/ItemCounter.module.css"


function ItemCounter({item}) {
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(CartContext)

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    const handleAddToCart = () => {
        addToCart({...item, count})
    }

    return (
        <div>
            <p className={styles.unidad}>Unidad: {count}</p>
            <Button className={styles.suma} onClick={handleAdd}  variant="info"  >+</Button>
            <Button className={styles.menos}
                onClick={handleSub}  
                variant="dark" 
                disabled={count === 0}
            >
                -
            </Button>
            <div className={styles.botoncarrito}>
                <Button  onClick={handleAddToCart}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCounter;