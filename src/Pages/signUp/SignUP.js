import React from 'react';
import {
  Button,
  Grid,
  Paper,
  TextField,
  Box,
  Typography,
  Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GoogleIcon from '@mui/icons-material/Google';
import images from '../../assets/images/spc.webp';

const SignUP = () => {
  const paperStyle = {
    padding: '0  20px 20px 20px',
    width: '25%',
    marginLeft: '40%',
    backgroundColor: '',
    height: 600,
  };

  return (
    <div className='entire-page' sx={{}}>
      <Box sx={{ backgroundColor: '#673ab7', paddingTop: '90px', pb: '100px' }}>
        {/* <img src='../../assets/images/logo.jpg' alt='Italian Trulli'></img> */}
        <Paper elevation={2} style={paperStyle} className='paper'>
          <img src={images} width='400px' height='170px' />
          <div className='title'>
            <Typography
              variant='h6'
              id='welcome'
              sx={{
                mt: 1,
                textAlign: 'center',
                color: '#673ab7',
                fontWeight: 'bold',
              }}
            >
              Welcome To Bardeen
            </Typography>

            <Typography id='welcome' sx={{ textAlign: 'center' }}>
              Let,s login to launch your automations
            </Typography>
          </div>
          <TextField
            id='outlined-basic'
            label='Email Address'
            variant='outlined'
            margin='dense'
            autoFocus
            fullWidth
          />
          <TextField
            autoComplete='given-name'
            name='name'
            required
            fullWidth
            id='Name'
            label='Password'
            autoFocus
            margin='dense'
            variant='outlined'
          />
          <Grid sx={{ display: 'flex' }}>
            <Typography sx={{ textAlign: 'right' }}>
              <Link
                to='#'
                sx={{ textDecoration: 'underline', color: '#673ab7' }}
              >
                Create account
              </Link>
            </Typography>
            <Typography sx={{ ml: '151px' }}>
              <Link
                to='#'
                sx={{
                  textDecoration: 'underline',
                  textAlign: 'left',
                  color: '#673ab7',
                }}
              >
                Forgot Password
              </Link>
            </Typography>
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            sx={{ mt: 1, mb: 2, backgroundColor: '#673ab7' }}
            //   onClick={handleSignup}
          >
            Submit
          </Button>
          <Button
            variant='outlined'
            fullWidth
            sx={{ pt: '11px', color: 'grey', justifyContent: 'flex-start' }}
          >
            <GoogleIcon />
            Sign in with Google
            <ArrowForwardIcon sx={{ ml: '150px' }} />
          </Button>

          <Button
            variant='outlined'
            fullWidth
            sx={{
              pt: '11px',
              mt: '11px',
              color: 'grey',
              justifyContent: 'flex-start',
            }}
          >
            <GitHubIcon />
            Sign in with Github
            <ArrowForwardIcon sx={{ ml: '150px' }} />
          </Button>
        </Paper>
      </Box>
    </div>
  );
};

export default SignUP;
