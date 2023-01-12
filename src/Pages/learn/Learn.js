import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import business from '../../assets/images/business.jpg';
import agr from '../../assets/images/agr.webp';
import digital from '../../assets/images/digital.jpg';
import it from '../../assets/images/it.jpg';
import finance from '../../assets/images/finance.webp';
import dev from '../../assets/images/dev.jpg';

const Learn = () => {
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
            Develop Passion for Learning
          </Typography>
        </Grid>
        <Grid sx={{ p: '71px', display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 400, p: '31px' }}>
            <CardHeader
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Business Developmet'
              subheader='Come and join us'
            />
            <CardMedia>
              <img src={business} width='400px' height='200'></img>
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                The Bhutto Dry Fruits is a perfect Showroom for the Customer
                here you can get the best quality dry fruits and all the
                varieties you are inerested in at very cheap prise. Come and
                grab your opportunity
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <Button color='secondary'>Learn More</Button>
              {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore> */}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 400, p: '31px' }}>
            <CardHeader
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Digital Marketing'
              subheader='Come and join us'
            />
            <CardMedia>
              <img src={digital} width='400px' height='200'></img>
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                The Bhutto Dry Fruits is a perfect Showroom for the Customer
                here you can get the best quality dry fruits and all the
                varieties you are inerested in at very cheap prise. Come and
                grab your opportunity
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <Button color='secondary'>Learn More</Button>
              {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore> */}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 400, p: '31px' }}>
            <CardHeader
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Agricultural Engineering'
              subheader='Come and join us'
            />
            <CardMedia>
              <img src={agr} width='400px' height='200'></img>
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                The Bhutto Dry Fruits is a perfect Showroom for the Customer
                here you can get the best quality dry fruits and all the
                varieties you are inerested in at very cheap prise. Come and
                grab your opportunity
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <Button color='secondary'>Learn More</Button>
              {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid
          sx={{
            p: '71px',
            pt: '0px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card sx={{ maxWidth: 400, p: '31px' }}>
            <CardHeader
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='It sector'
              subheader='Come and join us'
            />
            <CardMedia>
              <img src={it} width='400px' height='200'></img>
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                The Bhutto Dry Fruits is a perfect Showroom for the Customer
                here you can get the best quality dry fruits and all the
                varieties you are inerested in at very cheap prise. Come and
                grab your opportunity
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <Button color='secondary'>Learn More</Button>
              {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore> */}
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 400, p: '31px' }}>
            <CardHeader
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Finance'
              subheader='Come and join us'
            />
            <CardMedia>
              <img src={finance} width='400px' height='200'></img>
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                The Bhutto Dry Fruits is a perfect Showroom for the Customer
                here you can get the best quality dry fruits and all the
                varieties you are inerested in at very cheap prise. Come and
                grab your opportunity
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <Button color='secondary'>Learn More</Button>
              {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore> */}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 400, p: '31px' }}>
            <CardHeader
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Web Development'
              subheader='Come and join us'
            />
            <CardMedia>
              <img src={dev} width='400px' height='200'></img>
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                The Bhutto Dry Fruits is a perfect Showroom for the Customer
                here you can get the best quality dry fruits and all the
                varieties you are inerested in at very cheap prise. Come and
                grab your opportunity
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <Button color='secondary'>Learn More</Button>
              {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore> */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Learn;
