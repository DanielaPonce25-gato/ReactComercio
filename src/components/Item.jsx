import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom' 
import styles from '../styles/Item.module.css'

function Item ({ item }) {
  const navigate = useNavigate()

  return (
    <Col lg={3} md={6} className={styles.producto}>
      <Card className={styles.carta}>
        <Card.Img variant="top" src={item.image} className={styles.imagen} />
        <Card.Body>
          <Card.Title>{item.name} </Card.Title>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Button onClick={() => navigate (`/item/${item.id}`)}>
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Item