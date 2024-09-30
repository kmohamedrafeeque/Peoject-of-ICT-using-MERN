import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Navbar = () => {
  return (
    <div id="acc">
        <AppBar sx={{ backgroundColor: 'green' }}>
            <Toolbar>
            {/* <Box component="img" alt="My Logo" src="" /> */}
              <Typography variant='h3' color='#000'> UseMe </Typography> &nbsp;&nbsp;
                <Link to='/B'>
                <Button variant='contained'>HOME</Button>&nbsp;&nbsp;
                </Link>
                <Link to='/A'>
                <Button variant='contained'>Add</Button>&nbsp;&nbsp;
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}



export default Navbar
