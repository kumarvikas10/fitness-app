import React from 'react';
import {Box, Typography, Button} from '@mui/material';
import BannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt:{lg: '100px', xs: '70px'}, ml:{sm:'50px'}}} position="relative" p="20px" mb="120px">
        <Typography color="#2e7d32" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight="700" sx={{fontSize: {lg: '44px', xs:'40px'}}} mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb="40px">
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color="success" href="#exercises">Explore Exercises</Button>
        {/* <Typography fontWeight="600" color="#2e7d32" sx={{
            opacity: 0.1,
            display:{ lg: 'block', xs: 'none'}
        }}
        fontSize="200px">
            exercise
        </Typography> */}
        <img src={BannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner