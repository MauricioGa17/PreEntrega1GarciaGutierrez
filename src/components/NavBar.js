import './NavBar.css'
import { BiSearchAlt2 } from "react-icons/bi";

import Logo from '../assets/img/nav-logo.png'

//NAV
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import ListaProductos from './ListaProductos';
import AccountWidget from './AccountWidget';
import CartWidget from './CartWidget';

const NavBar = () => {

    return (
        <>
            <div className='bg-dark px-5 pt-2 w-100 d-flex flex-row justify-content-end align-items-center' style={{ height:"auto" }}>
                <AccountWidget/>
                <CartWidget/>
            </div>
            
        
            <Navbar bg="light" className='shadow mb-3' expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" className='mb-3'/>
                    <Navbar.Collapse id="navbarScroll">
                        <div className='d-flex flex-column-reverse flex-sm-column-reverse flex-md-column-reverse flex-lg-row flex-xl-row w-100 justify-content-between align-items-center'>
                            <Nav>
                                <Nav.Link href="#">Inicio</Nav.Link>
                                <Nav.Link href="#">Noticias</Nav.Link>
                                <Nav.Link href="#">Nosotros</Nav.Link>
                                <ListaProductos/>
                            </Nav>
                            <div className='imagen-nav-contenedor d-flex flex-column' style={{ width:"30%" }}>
                                <img className='imagen-nav' src={Logo} />
                                <label className='text-center'>Sea World Shop</label>
                            </div>
                            <div className="d-flex flex-row">
                                <InputGroup className='me-3'>
                                    <InputGroup.Text className='border border-secondary'>
                                        <BiSearchAlt2/>
                                    </InputGroup.Text>
                                    <Form.Control
                                        className='nav-input-busqueda border border-secondary'
                                        placeholder="...."
                                    />
                                </InputGroup>
                                <Button variant="success">Buscar</Button>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar