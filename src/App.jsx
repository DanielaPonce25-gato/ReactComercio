import NavBarContainer from './components/NavBarContainer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
return (
<BrowserRouter>
<NavBarContainer />
<Routes>
<Route path='/' element={<ItemListContainer />}/>
<Route path='/category/:indice' element={<ItemListContainer/>} />
<Route path='/item/:id' element={<ItemDetailContainer/>} />

{/* Ruta de fallback para evitar pantalla en blanco */}
<Route path='*' element={<h2>Página no encontrada ❌</h2>} />
</Routes>
</BrowserRouter>
)
}


export default App