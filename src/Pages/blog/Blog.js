import { Avatar, Button, Chip, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import inline from '../../assets/images/inline.jpeg';
import jazim from '../../assets/images/jazim.jpg';
import blog from '../../assets/images/blog.png';

const Blog = () => {
  return (
    <>
      <Grid>
        <Typography
          variant='h5'
          sx={{ color: 'white', backgroundColor: 'black', padding: '50px' }}
        >
          Typeform
          <Button
            variant='outlined'
            sx={{ ml: '80%', color: 'black', backgroundColor: 'white' }}
          >
            Log in
          </Button>
        </Typography>
        <Grid sx={{ backgroundColor: 'rgb(248, 246, 241)', pb: '400px' }}>
          <Typography
            variant='h1'
            sx={{
              display: 'flex',
              justifyContent: 'center',

              pt: '91px',
            }}
          >
            Be spoiled for choice with
            <br /> (happier) applications
          </Typography>
          <Typography
            variant='h5'
            sx={{
              display: 'flex',
              justifyContent: 'center',

              pt: '71px',
            }}
          >
            Whether you’re recruiting for talent or tenants, Typeform makes
            <br /> the application process a joy for them, and a breeze for you.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: '71px' }}>
            <Chip
              label='Get started_it,s Free'
              variant='outlined'
              sx={{
                p: '31px',
                color: 'white',
                backgroundColor: 'black',
              }}
            />
          </Box>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center', mt: '-250px' }}>
          <img src={blog} alt='photo' width='900px'></img>
        </Grid>

        <Grid sx={{ display: 'flex', justifyContent: 'center', pt: '170px' }}>
          <Typography variant='h4'>
            “Typeform helps me attract more responses <br /> and a higher
            response rate than I could <br /> with other tools.”
          </Typography>
        </Grid>
        <Stack
          direction='column'
          sx={{
            pt: '71px',
            pl: '45%',
            pb: '71px',
          }}
        >
          <Avatar
            alt='Travis Howard'
            src='/static/images/avatar/2.jpg'
            sx={{ p: '30px' }}
          />
          <Typography variant='h7'>Jazim Nazir</Typography>
          <Typography variant='h7'>Founder @ Jazim </Typography>
        </Stack>

        <Stack
          direction='row'
          sx={{
            pl: '100px',
            pt: '50px',
            pb: '71px',
            backgroundColor: 'rgb(248, 246, 241)',
          }}
        >
          <img src={inline} width='700px' />
          <Typography variant='h4' sx={{ pl: '31px', pt: '50px' }}>
            Founder @ Jazim “Typeform helps me attract more responses <br /> and
            a higher response rate than I could <br /> with other tools.”{' '}
          </Typography>
        </Stack>
      </Grid>
    </>
  );
};

export default Blog;
