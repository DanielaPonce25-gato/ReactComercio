import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './Cartwidget'
import { NavLink } from 'react-router-dom'

function NavBar ({categories}) {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#home">Guardarropas 🏪 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map((category) => (
                <NavDropdown.Item 
                    as={NavLink} 
                    to={`/category/${category}`} 
                    key={category}
                    style={({isActive}) => ({
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? 'while' : 'black-500' ,
                    })}
                  >
                  {category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;