import React from 'react'
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '100px', xs: '40px'}, mt: {sm: '30px', xs: '20px'}, justifyContent: 'none'}} px="20px">
        <Link to="/">
        <img src={Logo} alt="fitness-logo" style={{width:'60px', height: '60px', margin: '0 10px' }}/>
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
            <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '1px solid #2e7d32'}}>Home</Link>
            <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar