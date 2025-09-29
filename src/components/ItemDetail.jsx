import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ItemCounter from "./ItemCounter";
import styles from '../styles/DetailContainer.module.css'

function ItemDetail({item}) {
    return (
        <Container  className={styles.container}>
            <Row>
                <Col md={4}>
                    <Image src={item?.image}  className={styles.imagen}/>
                </Col>
                <Col>
                    <h2>{item?.name}</h2>
                    <p className={styles.descripcion}>{item?.description}</p>
                    <h3 className={styles.precio}>${item?.price}</h3>
                    <ItemCounter item={item}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail