import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TypeWriterEffect from 'react-typewriter-effect';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CodeIcon from '@material-ui/icons/Code';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx'
import Typed from 'react-typed';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

//styling
//the page has three sections with content - header, sectionTwo, sectionThree
const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  sectionTitles: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
  contentMargins: {
    marginBottom: theme.spacing(8),
  },
  terminal: {
    backgroundColor: "#2D2D2D",
    borderColor: "#C01F24"
  },
  terminalIcons: {
    margin: "0px",
    padding: "0px",
  },
  sectionTwoIcons: {
    marginBottom: theme.spacing(4),
  },
  textXiconSpacing: {
    marginTop: theme.spacing(2),
  }
}));


export default function HomePage(props) {
  const classes = useStyles();
  const { history } = props

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  return (
    <div>
      {/*-----------Header
       ---------------------------*/}
      <Grid container spacing={4}
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.header}>
        <Grid item xs={12} sm={6} >
          <div className={classes.headerContent}>
            <Typography variant="h3" color="primary" gutterBottom>
              Hi, I am Daniel
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
              and I am glad that you landed on my porfolio page. Scroll down for the fun part if you're interested to see what I've developed.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} >
          <div className={classes.headerContent}>
            <Card className={classes.terminal} variant="outlined">
              <CardContent >
                <Typography variant="h6" color='primary'><TypeWriterEffect multiText={[
                  'I am a full stack JavaScript developer',
                  'I am can teach you snowboard',
                  'I can break a working code',
                ]} multiTextDelay={500} textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1.5rem" }} typeSpeed={1} cursorColor="#1A1A1A" /></Typography>
              </CardContent>
            </Card>
            <Typography color='primary'><Typed
              strings={[
                'I am a fullstack developer',
                'I can teach you how to snowboard',
                ]}
              typeSpeed={40}
              backSpeed={50}
            >
            </Typed></Typography>
          </div>
        </Grid>
      </Grid>

      {/* section3----4 DFIR CHALLENGES CSI LINUX SOLVES
          --------------------------------------------------*/}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color='primary' variant="h4" align="center" className={classes.sectionTitles}>Development experience</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align="center">
                  CSI Linux
                </Typography>
                <Typography variant="body2" paragraph>
                  I designed and developed the website of CSI Linux - an open-source Linux distribution for Digital Forensics and Incident Response. The website was built in MERN Stack and it has a mobile responsive design. A key functionality is the contact form that sends the messages on the corporate email and stores them in a database. Other functionality displays the list of product features and lets the users to search for specific integrations that CSI Linux has.
                </Typography>
                <Typography gutterBottom variant="h6" component="h2" align="center">
                  Used technologies
                </Typography>
                <Typography variant="body2" >
                  MongoDB, Express, React, Node, Google Material UI, CSS3, HTML5.
                </Typography>
                <Button variant="outlined" color="primary" href="https://csilinux.com/">Visit CSI Linux</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align="center">
                  newpeaks
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                  newpeaks is a web app to book ski passes to ski resorts in Europe. Businesses can register on the website to list their ski resorts and add description with pictures. Also, businesses are able to update and delete the created locations. Individuals are able to filter resorts by country. In order to book book a ski pass, the user has to be registered.
                </Typography>
                <Typography gutterBottom variant="h6" component="h2" align="center">
                  Used technologies
                </Typography>
                <Typography variant="body2" >
                  Handlebars, NodeJS, ExpressJS, SCSS/SASS, CSS, HTML
                </Typography>
                <Button variant="outlined" color="primary" href="https://newpeaks.herokuapp.com/">Visit newpeaks</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align="center">
                  Nomad Skater
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                  Nomad Skater is a game about a skateboarder that earns money from tricks while travelling. The player has to navigate through obstacles to get money and avoid the police officers who think that 'skateboarding is a crime'. The speed increases everytime the player scores another 15 points.
                </Typography>
                <Typography gutterBottom variant="h6" component="h2" align="center">
                  Used technologies
                </Typography>
                <Typography variant="body2" >
                  JavaScript, DOM manipulation, CSS3, HTML5 Canvas
                </Typography>
                <Button variant="outlined" color="primary" href="https://danieltraci.github.io/Nomad-Skater/">Play Nomad Skater</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
