import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="30px" bgcolor="#f3fffb">
      <Stack gap="10px" alignItems="center" px="20px" pt="20px" direction="row" justifyContent="center">
        <img src={Logo} alt="logo" width="90px" height="70px" />
        <Typography variant="h6" pb="5px" mt="5px">Copyright © vikas kumar verma</Typography>
      </Stack>
    </Box>
  )
}

export default Footer