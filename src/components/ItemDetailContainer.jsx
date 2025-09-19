import { useParams } from "react-router-dom" 
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [item, setItem] = useState()

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    if(!item) {
        return (<div>Cargando detalles...</div>)
    }


    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer