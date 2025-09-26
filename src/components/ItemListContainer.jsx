import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { withLoading } from '../hoc/withLoading'
import { useParams } from 'react-router-dom'

const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer() {
    const [items, setItems] = useState([])
    const {id} = useParams() 


    useEffect(() => {

        //llamada a una api. Y estamos pidiendo datos a un servicio externo.

        //Se renderiza cuando el componente se monta por primera vez.

        /*
                data => setItems(data.products
        {
        
            propi: .....,

            products: [ {id:1, title: '...'}, {id:2, title: '...'}  ]
        
        }
        */

        const Productos = 'https://dummyjson.com/products' //url de la api de productos. 
        const Categoria = `https://dummyjson.com/products/category/${id}` //url de la api de productos por categoria.

        fetch(id ? Categoria : Productos) // Pido los productos a la api.
        .then(res => res.json())
        .then(data => {
            setTimeout(() =>{
                setItems(data.products) //Guardo los productos en el estado. En la variable items.
            }, 3000)
        })

    },[id])


    return (
        <ItemListWithLoading items={items}/>
    )
}

export default ItemListContainer;