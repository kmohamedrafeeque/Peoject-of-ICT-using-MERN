import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                   <Typography variant="h6">Raapp</Typography > &nbsp;&nbsp;
               <Link to="/l">
                   <Button variant='contained'>Login</Button>
                   </Link> &nbsp;
                <Link to="/s" >
                   <Button variant='contained'>Signup</Button>
                   </Link>&nbsp;
                <Link to="/state">
                   <Button variant='contained'>state</Button>
                   </Link>&nbsp;
               <Link to="/ct">
                   <Button variant='contained'>count</Button>
                   </Link>&nbsp;
               <Link to="/api">
                   <Button variant='contained'>api</Button>
                   </Link>&nbsp;
               <Link to="/poki">
                   <Button variant='contained'>poki</Button>
                   </Link>&nbsp;
              </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar