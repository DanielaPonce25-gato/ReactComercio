import NavBarContainer from './Components/NavBarContainer'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import CartContainer from './Components/CartContainer'
import Checkout from './Components/Checkout'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
return (
<BrowserRouter>
<NavBarContainer />
<Routes>
<Route path='/' element={<ItemListContainer />}/>
<Route path='/category/:id' element={<ItemListContainer/>} />
<Route path='/item/:id' element={<ItemDetailContainer/>} />
<Route path='/cart' element={<CartContainer/>} />
<Route path='/checkout' element={<Checkout/>} />

{/* Ruta de fallback para evitar pantalla en blanco */}
<Route path='*' element={<h2>Página no encontrada ❌</h2>} />
</Routes>
</BrowserRouter>
)
}


export default App