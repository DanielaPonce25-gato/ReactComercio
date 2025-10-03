import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './Cartwidget'
import { NavLink, Link} from 'react-router'

function NavBar ({categories}) {

  return (
    <Navbar expand="lg" className="w-%100">
      <Container >
        <Navbar.Brand as={Link} to={"/"}>
          Picis 🐟
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map((category) => (
                <NavDropdown.Item 
                    as={NavLink} 
                    to={`/category/${category.categoryName} `} 
                    key={category.id}
                    style={({isActive}) => ({
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? 'while' : 'black-500' ,
                    })}
                  >
                  {category.categoryName}
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