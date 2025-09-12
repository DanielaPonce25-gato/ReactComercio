import { useEffect, useState } from 'react'
import NavBar from './NavBar';

function NavBarContainer () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    // se lo pasa a la NavBar 
    
    return <NavBar categories={categories} /> //Le paso las categorias por el estado {categories}
}

export default NavBarContainer;