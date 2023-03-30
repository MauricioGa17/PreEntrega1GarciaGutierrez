import React from 'react'
import { Container } from 'react-bootstrap'

const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
        {greeting}
    </Container>
  )
}

export default ItemListContainer