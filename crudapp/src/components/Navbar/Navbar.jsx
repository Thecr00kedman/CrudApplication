import React from 'react'
import {AppBar, Tabs, Toolbar, styled} from "@mui/material"
import { Link } from 'react-router-dom'

function Navbar() {


  const Header = styled(AppBar)`
  background: black`

  const Tabs= styled('p') `
  font-size: 20px;
  margin-right:20px;`
  

  return (
    <Header position='static'>
        <Toolbar>
          <Tabs >Coding Library</Tabs>
          <Link style={{marginRight:"20px",color:'white',textDecoration:"none"}} to='/all'>All users</Link>
          <Link style={{color:'white',textDecoration:"none"}} to='/add'>Add users</Link>
          

        </Toolbar>
    </Header>

  )
}

export default Navbar