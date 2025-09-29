import { useParams } from "react-router-dom" 
import { useEffect, useState } from "react"
import { getItem } from "../firebase/db"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [item, setItem] = useState()

    const { id } = useParams()

    useEffect(() => {
        getItem(id)
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