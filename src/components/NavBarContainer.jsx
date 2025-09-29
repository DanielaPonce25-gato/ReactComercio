import { useEffect, useState } from 'react'
import { getCategories } from '../firebase/db';
import NavBar from './NavBar';

function NavBarContainer () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
       getCategories()
       .then(data => setCategories(data))
    }, [])

    // se lo pasa a la NavBar 
    
    return <NavBar categories={categories} /> //Le paso las categorias por el estado {categories}
}

export default NavBarContainer;