import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../assets/images/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import image from '../../assets/images/news.jpg';
import ship from '../../assets/images/ship.webp';
import icon from '../../assets/images/cs.jpg';
import js from '../../assets/images/js.webp';
import react from '../../assets/images/react.jpg';
import img from '../../assets/images/img.webp';
import Broad from '../../assets/images/Broad.webp';
import team from '../../assets/images/team.jpg';
import tm from '../../assets/images/tm.jpg';
import fifa from '../../assets/images/fifa.webp';
import imag from '../../assets/images/imag.jpg';
import msi from '../../assets/images/msi.jpg';
import trofy from '../../assets/images/trofy.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import dryfrt from '../../assets/images/dryfrt.jpg';
import { ExpandMore } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import puma from '../../assets/images/puma.webp';
import adidas from '../../assets/images/adidas.jpg';
import bmw from '../../assets/images/bmw.jpg';
const Home = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Grid container p={2}>
        <Grid item xs={6} md={2} p={1} pl={11}>
          <img src={logo} width='70px'></img>
        </Grid>
        <Grid
          item
          p={2}
          xs={0}
          md={8}
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          <Stack
            direction='row'
            spacing={9}
            sx={{ color: 'white', fontWeight: 'bold' }}
            className='navButtons'
          >
            <Link to='/learn'>
              <Typography variant='body3'>LEARN</Typography>
            </Link>
            <Link to='/blog'>
              <Typography variant='body3'>BLOG</Typography>
            </Link>
            <Link to='/bookmarks'>
              <Typography variant='body3'>BOOKMARKS</Typography>
            </Link>
            <Link to='/uikit'>
              <Typography variant='body3'>UI KIT</Typography>
            </Link>
            <Link to='/about'>
              <Typography variant='body3'>ABOUT US</Typography>
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={6} md={2} spacing={9} textAlign='right' mt={1}>
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
          <Button variant='outlined' className='button' color='error'>
            Let's Talk
          </Button>
        </Grid>
      </Grid>
      <hr
        style={{
          backgroundColor: 'black',
          height: '3px',
          marginTop: '5px',
          marginLeft: '100px',
          marginRight: '100px',
        }}
      />
      <Grid container pl={11}>
        <Grid item xs={5} p={2}>
          <Typography variant='h5' sx={{ fontWeight: 'bold', mb: '11px' }}>
            Featured Articel
          </Typography>
          <Grid>
            <img src={ship} width='500px' height='450'></img>
            <Typography sx={{ fontWeight: 'bold' }}>
              The UK's Department for International Trade Wants To
              <br /> Help You Find The Right Opportunity.
            </Typography>
            <Typography>
              The UK Has Seen Rapid Growth In Supply Chain Industries <br />-
              Discover New Opportunities Now. UK Government.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={7} mt={9}>
          <Stack direction='row'>
            <img src={icon} width='300px' height='150px'></img>
            <Grid ml={3}>
              <Typography>9 December 10:00 am </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                Technology today is evolving at a rapid pace, enabling faster
                <br />
                change and progress, causing an acceleration of the rate <br />
                of change. However, it is not only technology trends and <br />{' '}
                emerging technologies that are evolving, a lot more <br /> has
                changed this year
              </Typography>
            </Grid>
          </Stack>
          <Stack direction='row' mt={1}>
            <img src={js} width='300px' height='170px'></img>
            <Grid ml={3}>
              <Typography>9 December 11:00 am</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                The JavaScript family is ever-evolving and is set to launch new
                <br /> JavaScript features in June 2022. The ES2022 will be the
                13th <br />
                edition of features after it was initially launched in 1997. The
                <br />
                ES2022 features that reach the stage 4 verification are added
                <br />
                to the JavaScript family.
              </Typography>
            </Grid>
          </Stack>
          <Stack direction='row' mt={1}>
            <img src={react} width='300px' height='200px'></img>
            <Grid ml={3}>
              <Typography>9 December 01:00 pm </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                Run by the UK’s most experienced journalists, with a proven
                <br /> track-record of breaking the biggest real estate stories
                in the
                <br /> market, React News is the best place to find crucial,
                business- <br />
                sensitive information before the competition.The heavyweight
                <br />
                editorial team has consistently and obsessively been at the
                <br />
                forefront of setting the news agenda for the industry – and will
                continue to do so.
              </Typography>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <hr
        style={{
          backgroundColor: 'black',
          height: '3px',
          marginTop: '5px',
          marginLeft: '100px',
          marginRight: '100px',
        }}
      />
      <Grid item xs={7} p={2}>
        <Typography
          variant='h5'
          sx={{ fontWeight: 'bold', mb: '11px', pl: '91px' }}
        >
          Global News
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        ml={13}
        sx={{
          display: 'flex',

          alignItems: 'center',
        }}
      >
        <Stack direction='column'>
          <img src={img} width='300px' height='200px'></img>
          <Typography>
            They are an aspect of any famous <br />
            venture. It leverages the company's <br />
            growth and boosts its economic power.
            <br /> Moreover, they support inventions
            <br /> and they create a multitude of <br />
            career opportunities
          </Typography>
        </Stack>
        <Stack direction='column' pl='39px'>
          <img src={Broad} width='300px' height='200px'></img>
          <Typography>
            They are an aspect of any famous <br />
            venture. It leverages the company's <br />
            growth and boosts its economic power.
            <br /> Moreover, they support inventions
            <br /> and they create a multitude of <br />
            career opportunities
          </Typography>
        </Stack>
        <Stack direction='column' pl='39px'>
          <img src={team} width='300px' height='200px'></img>
          <Typography>
            They are an aspect of any famous <br />
            venture. It leverages the company's <br />
            growth and boosts its economic power.
            <br /> Moreover, they support inventions
            <br /> and they create a multitude of <br />
            career opportunities
          </Typography>
        </Stack>
        <Stack direction='column' pl='39px'>
          <img src={tm} width='300px' height='200px'></img>
          <Typography>
            They are an aspect of any famous <br />
            venture. It leverages the company's <br />
            growth and boosts its economic power.
            <br /> Moreover, they support inventions
            <br /> and they create a multitude of <br />
            career opportunities
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={5}
        ml={13}
        mt={9}
        mb={3}
        sx={{
          display: 'flex',

          alignItems: 'center',
        }}
      >
        <Stack direction='column'>
          <img src={fifa} width='300px' height='200px'></img>
          <Typography>
            They are an aspect of any famous <br />
            venture. It leverages the company's <br />
            growth and boosts its economic power.
            <br /> Moreover, they support inventions
            <br /> and they create a multitude of <br />
            career opportunities
          </Typography>
        </Stack>
        <Stack direction='column' pl='39px'>
          <img src={imag} width='300px' height='200px'></img>
          <Typography>
            They are an aspect of any famous <br />
            venture. It leverages the company's <br />
            growth and boosts its economic power.
            <br /> Moreover, they support inventions
            <br /> and they create a multitude of <br />
            career opportunities
          </Typography>
        </Stack>
        <Stack direction='column' pl='39px'>
          <img src={msi} width='300px' height='200px'></img>
          <Typography>
            They are an aspect of any famous <br />
            venture. It leverages the company's <br />
            growth and boosts its economic power.
            <br /> Moreover, they support inventions
            <br /> and they create a multitude of <br />
            career opportunities
          </Typography>
        </Stack>
        <Stack direction='column' pl='39px'>
          <img src={trofy} width='300px' height='200px'></img>
          <Typography>
            They are an aspect of any famous <br />
            venture. It leverages the company's <br />
            growth and boosts its economic power.
            <br /> Moreover, they support inventions
            <br /> and they create a multitude of <br />
            career opportunities
          </Typography>
        </Stack>
      </Grid>
      <hr
        style={{
          backgroundColor: 'black',
          height: '3px',
          marginTop: '3px',
          marginLeft: '100px',
          marginRight: '100px',
        }}
      />
      <Grid item xs={7} p={2}>
        <Typography
          variant='h5'
          sx={{ fontWeight: 'bold', mb: '11px', pl: '91px' }}
        >
          Adds
        </Typography>
      </Grid>

      <Grid
        ml='3px'
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card sx={{ maxWidth: 320 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
                B
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Bhutto Dry Fruits'
            subheader='September 14, 2016'
          />
          <CardMedia>
            <img src={dryfrt} width='400px' height='200'></img>
          </CardMedia>
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              The Bhutto Dry Fruits is a perfect Showroom for the Customer here
              you can get the best quality dry fruits and all the varieties you
              are inerested in at very cheap prise. Come and grab your
              opportunity
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                An example of dried fruits is nuts, almonds, apricots, etc.; it
                is also known as preservative food. Dried fruits are mostly used
                in dried mixes, cakes, and breakfast cereals.
              </Typography>
              <Typography paragraph>
                Dried fruit is a type of fruit that contains zero percent water.
                These fruits dried naturally due to sun drying or dehydration.
                They are very costly because of their taste and high nutritive
                value. Consumption of dried fruits is increasing day by day.
              </Typography>
              <Typography paragraph>
                Dried fruits have lots of benefits for health such as almonds
                are best for good memory, walnuts have vitamin E, and it helps
                with cancer-fighting, brazil nuts control thyroid, dates contain
                iron and it very helpful with fighting anemia, apricots are very
                good for eyes. (Discard any mussels that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card sx={{ maxWidth: 320, pl: '27px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
                b
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='BMW'
            subheader='September 14, 2016'
          />
          <CardMedia>
            <img src={bmw} width='400px' height='200'></img>
          </CardMedia>
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              This Bhutto Dry Fruits is a perfect Showroom for the Customer here
              you can get the best quality dry fruits and all the varieties you
              are inerested in at very cheap prise. Come and grab your
              opportunity
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                An example of dried fruits is nuts, almonds, apricots, etc.; it
                is also known as preservative food. Dried fruits are mostly used
                in dried mixes, cakes, and breakfast cereals.
              </Typography>
              <Typography paragraph>
                Dried fruit is a type of fruit that contains zero percent water.
                These fruits dried naturally due to sun drying or dehydration.
                They are very costly because of their taste and high nutritive
                value. Consumption of dried fruits is increasing day by day.
              </Typography>
              <Typography paragraph>
                Dried fruits have lots of benefits for health such as almonds
                are best for good memory, walnuts have vitamin E, and it helps
                with cancer-fighting, brazil nuts control thyroid, dates contain
                iron and it very helpful with fighting anemia, apricots are very
                good for eyes. (Discard any mussels that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 320, pl: '27px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
                A
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Adidas'
            subheader='September 14, 2016'
          />
          <CardMedia>
            <img src={adidas} width='400px' height='200'></img>
          </CardMedia>
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              This Bhutto Dry Fruits is a perfect Showroom for the Customer here
              you can get the best quality dry fruits and all the varieties you
              are inerested in at very cheap prise. Come and grab your
              opportunity
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                An example of dried fruits is nuts, almonds, apricots, etc.; it
                is also known as preservative food. Dried fruits are mostly used
                in dried mixes, cakes, and breakfast cereals.
              </Typography>
              <Typography paragraph>
                Dried fruit is a type of fruit that contains zero percent water.
                These fruits dried naturally due to sun drying or dehydration.
                They are very costly because of their taste and high nutritive
                value. Consumption of dried fruits is increasing day by day.
              </Typography>
              <Typography paragraph>
                Dried fruits have lots of benefits for health such as almonds
                are best for good memory, walnuts have vitamin E, and it helps
                with cancer-fighting, brazil nuts control thyroid, dates contain
                iron and it very helpful with fighting anemia, apricots are very
                good for eyes. (Discard any mussels that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 320, pl: '27px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
                B
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Puma'
            subheader='September 14, 2016'
          />
          <CardMedia>
            <img src={puma} width='400px' height='200'></img>
          </CardMedia>
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              This Bhutto Dry Fruits is a perfect Showroom for the Customer here
              you can get the best quality dry fruits and all the varieties you
              are inerested in at very cheap prise. Come and grab your
              opportunity
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                An example of dried fruits is nuts, almonds, apricots, etc.; it
                is also known as preservative food. Dried fruits are mostly used
                in dried mixes, cakes, and breakfast cereals.
              </Typography>
              <Typography paragraph>
                Dried fruit is a type of fruit that contains zero percent water.
                These fruits dried naturally due to sun drying or dehydration.
                They are very costly because of their taste and high nutritive
                value. Consumption of dried fruits is increasing day by day.
              </Typography>
              <Typography paragraph>
                Dried fruits have lots of benefits for health such as almonds
                are best for good memory, walnuts have vitamin E, and it helps
                with cancer-fighting, brazil nuts control thyroid, dates contain
                iron and it very helpful with fighting anemia, apricots are very
                good for eyes. (Discard any mussels that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </>
  );
};

export default Home;
