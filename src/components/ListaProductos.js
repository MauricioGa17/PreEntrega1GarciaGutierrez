import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

const ListaProductos = () => {
  return (
    <NavDropdown title="Productos" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#">Filtros</NavDropdown.Item>
        <NavDropdown.Item href="#">Calentadores</NavDropdown.Item>
        <NavDropdown.Item href="#">Alimentos</NavDropdown.Item>
        <NavDropdown.Item href="#">Decoracion y Sustratos</NavDropdown.Item>
        <NavDropdown.Item href="#">Salud y Acondicionadores</NavDropdown.Item>
    </NavDropdown>
  )
}

export default ListaProductos