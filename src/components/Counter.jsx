import { useState } from "react";
import Button from 'react-bootstrap/Button';
import styles from "../styles/Counter.module.css"

function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    return (
        <div>
            <p className={styles.unidad}>Unidad: {count}</p>
            <Button onClick={handleAdd}  variant="info"  >+</Button>
            <Button onClick={handleSub}  variant="dark" >-</Button>
            <div style={{display: 'flex',justifyContent: 'flex-end', marginTop: '10px',marginBottom: '10px'}}>
                <Button  variant="primary">Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default Counter;