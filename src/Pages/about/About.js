import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Grid
        sx={{
          p: '31px',
          border: '91px solid rgb(64,64,64)',
          backgroundColor: 'rgb(248, 246, 241)',
        }}
      >
        <Grid>
          <Typography variant='h4'>Overview</Typography>
          <Typography variant='h7' sx={{ pt: '91px' }}>
            News App PVT | Our company is serving from last 10 years{' '}
          </Typography>
          <Typography variant='h4' sx={{ pt: '50px' }}>
            Website
          </Typography>
          <Link to='/newsapp'>
            <Typography variant='h6'>https://newsapp.in</Typography>
          </Link>
          <Typography variant='h4' sx={{ pt: '50px' }}>
            Industry
          </Typography>
          <Typography variant='h7' sx={{ pt: '91px' }}>
            Social Platform
          </Typography>
          <Typography variant='h4' sx={{ pt: '50px' }}>
            Company Size
          </Typography>
          <Typography variant='h7' sx={{ pt: '91px' }}>
            100-150 employee
          </Typography>
          <Typography variant='h4' sx={{ pt: '50px' }}>
            Headquarters
          </Typography>
          <Typography variant='h7' sx={{ pt: '91px' }}>
            Srinagar,Jammu & Kashmir
          </Typography>
          <Typography variant='h4' sx={{ pt: '50px' }}>
            Type
          </Typography>
          <Typography variant='h7' sx={{ pt: '91px' }}>
            Privately Held
          </Typography>
          <Typography variant='h4' sx={{ pt: '50px' }}>
            Founded
          </Typography>
          <Typography variant='h7' sx={{ pt: '91px' }}>
            2001
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
