import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'

const Layout = () => {

  const [ greeting, setGreeting ] = useState("Bienvenido")

  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting={greeting}/>
    </div>
  )
}

export default Layout