import { Avatar, Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Ui from '../../assets/images/ui.png';

const Uikit = () => {
  return (
    <>
      <Grid>
        <Grid>
          <Typography
            variant='h5'
            sx={{ color: 'white', backgroundColor: 'grey', padding: '30px' }}
          >
            UI Kit
            <Button
              variant='outlined'
              sx={{ ml: '80%', color: 'black', backgroundColor: 'white' }}
            >
              Save
            </Button>
          </Typography>
        </Grid>
        <Grid sx={{ p: '71px' }}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', pt: '31px' }}>
            <Avatar sx={{ bgcolor: 'red' }}>N</Avatar>
            <Typography variant='h5'>News App</Typography>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h7'>UI/UX -Follow-HireUs</Typography>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Ui} />
          </Box>
          <Grid>
            <Typography variant='h5' sx={{ pl: '150px', pb: '11px' }}>
              News App | Kashmir
            </Typography>
            <Typography variant='h5' sx={{ pl: '201px' }}>
              We help startups to build their dream as design partners. So far
              we helped 8 companies to build their dream. Overall these startups
              got 200M+ investment. ✉️ Available for your long term or short
              term partnership 👋🏻 hello@ofspace.co
              <br /> 🔥 We will provide a quick analysis and a free proposal for
              it. Don’t worry, it is secure and confidential.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant='h5' sx={{ pl: '150px', pt: '31px' }}>
              Follow Us
            </Typography>
            <Typography variant='h6' sx={{ pl: '150px' }}>
              Instagram|FaceBook|WhatsApp
            </Typography>
            <Typography
              sx={{ pl: '150px', fontSize: '20px', fontWeight: 'bolder' }}
            >
              See How To Work At
            </Typography>
            <Typography
              sx={{
                pl: '150px',
                fontSize: '20px',
                fontWeight: 'bolder',
                color: 'red',
              }}
            >
              News Portals
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Uikit;
