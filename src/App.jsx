import NavBarContainer from './Components/NavBarContainer'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router'


function App() {

  return ( 
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:indice' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App