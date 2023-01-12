import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import iphone from '../../assets/images/iphone.jpg';
import i14 from '../../assets/images/i14.jpg';
import watch from '../../assets/images/watch.png';
const BookMarks = () => {
  return (
    <>
      <Grid>
        <Grid
          sx={{
            backgroundColor: 'rgb(64,64,64)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            p: '21px',
          }}
        >
          <Typography sx={{ pt: '11px', pr: '31px' }}>
            Choose another country or region to see content specific to your
            location.
          </Typography>
          <Box sx={{ minWidth: 300, backgroundColor: '	rgb(120,120,120)' }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Country</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                //   value={age}
                label='Age'
                //   onChange={handleChange}
              >
                <MenuItem value={10}>India</MenuItem>
                <MenuItem value={20}>Pakistan</MenuItem>
                <MenuItem value={30}>Amarica</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant='contained' sx={{ ml: '31px' }}>
            Continue
          </Button>
        </Grid>
        <Grid
          sx={{
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h2' sx={{ pt: '71px', pl: '31px' }}>
            iPhon 14 Pro Max
            <br />
            Pro.Beyond. A Healthy Leap Ahead
          </Typography>
          <img src={iphone} />
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h2' sx={{ pt: '71px', pl: '31px' }}>
            iPhon 14
          </Typography>
        </Grid>
        <Typography variant='h2' sx={{ pt: '21px', pl: '630px' }}>
          Big and Bigger
        </Typography>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to='/learnmore'>
            <Typography variant='h5' sx={{}}>
              Learn More{' >'}
            </Typography>
          </Link>
          <Link to='/learnmore'>
            <Typography variant='h5' sx={{ pl: '91px' }}>
              Buy{' >'}
            </Typography>
          </Link>
        </Grid>
        <Box sx={{ pl: '550px', pt: '31px', pb: '11px' }}>
          <img src={i14} width='500px' />
        </Box>
        <Grid
          sx={{
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h2' sx={{ pt: '71px', pl: '31px' }}>
            iPhone Watch
            <br />
            Series 8<br />
            Adventure awaits.
          </Typography>

          <img src={watch} />
        </Grid>
      </Grid>
    </>
  );
};

export default BookMarks;
