import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { withLoading } from '../hoc/withLoading'
import { useParams } from 'react-router-dom'
import { getItems, getItemsByCategory } from '../firebase/db'


const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer() {
    const [items, setItems] = useState([])
    const {id} = useParams() 

    useEffect(() => {
        if (id) {
            getItemsByCategory(id)
                .then(data => setItems(data))
        } else {
            getItems()
            .then(data => setItems(data))
        }
        
    },[id])

    return (
        <ItemListWithLoading items={items}/>
    )
}

export default ItemListContainer;