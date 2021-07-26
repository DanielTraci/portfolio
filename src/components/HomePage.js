import React from 'react';
import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CodeIcon from '@material-ui/icons/Code';
import clsx from 'clsx'
import Typed from 'react-typed';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReactPlayer from 'react-player'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    paddingTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  sectionTitles: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(10),
  },
  sectionSkills: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(7),
  },
  portfolio: {
    marginTop: theme.spacing(15),
  },
  btns: {
    minWidth: "200px",
    maxWidth: "200px",
    margin: theme.spacing(3),
    backgroundColor: "#0053e1",
    color: "#FFFFFF",
    '&:hover': {
      backgroundColor: "#ff4617",
      color: '#FFF'
  }

  },

}));


export default function HomePage(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {/*-----------Header
       ---------------------------*/}
      <Grid container id="header">
        <Grid item xs={12} className={classes.header}>
          <div className={classes.headerContent}>
            <p className="h1FontSize"><Typed
              strings={[
                "<>Hi, I'm Daniel",
                "<>I'm a fullstack developer",
                "<>Scroll down for the fun part",
              ]}
              typeSpeed={40}
              backSpeed={10} loop
            ></Typed></p>
          </div>
        </Grid>
      </Grid>


      {/* About me---------------------
          --------------------------------------------------*/}

      <div id="about" />
      <Box display="flex" justifyContent="center" className={classes.sectionTitles}>
        <Typography variant="h3" color="primary" align="center" className="bgTextColor" >
          A LONG STORY SHORT
        </Typography>
      </Box>

      <Grid container spacing={5} >
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" color="primary" paragraph >
            Once upon a time, there was a kid. Fastforward to the present day, that kid grew up to become a <span className="highlight">web developer</span>, certified Professional Scrum Master and experienced project manager from Nuremberg, Germany.
          </Typography>
          <Typography variant="h6" color="primary" >
            Hi, I'm <span className="highlight">Daniel Traci</span> and I'm that ex-kid. During the pandemic, I decided to switch my career to programming and <span className="highlight">graduated Ironhack's Full Stack Web Development Bootcamp</span>. I'm actively contributing to an open-source project called CSI Linux. Recently, I developed the project's new website (see it below). Also, I love snowboarding and some of my friends call me an adrenaline junkie. I will neither confirm nor deny.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography >
            <Typed
              strings={[
                "<>I treat programming like I treated snowboarding when I learnt to ride",
                "<>I can crash a few times, but I know it helps me to master my game",
                "<>One has to be relentless in that sense",
              ]}
              typeSpeed={30}
              backSpeed={10} loop className="h4FontSize"
            ></Typed>
          </Typography>
        </Grid>
      </Grid>

      {/* Skills---------------------
          --------------------------------------------------*/}
      <Grid container >
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" className={classes.sectionSkills}>
            <Typography variant="h3" color="primary" className="bgTextColor">
              MY SKILLS
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} container direction="column"
          justify="center"
          alignItems="center">
          <List >
            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="MongoDB"
                />
              </ListItem>
            </Box>
            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="ExpressJS"
                />
              </ListItem>
            </Box>
            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="ReactJS"
                />
              </ListItem>
            </Box>
            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="NodeJS"
                />
              </ListItem>
            </Box>
            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="HTML"
                />
              </ListItem>
            </Box>
            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="CSS"
                />
              </ListItem>
            </Box>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} container direction="column"
          justify="center"
          alignItems="center">
          <List >
            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="SASS"
                />
              </ListItem>
            </Box>

            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="Material-UI"
                />
              </ListItem>
            </Box>

            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="Bootstrap"
                />
              </ListItem>
            </Box>

            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="APIs"
                />
              </ListItem>
            </Box>

            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="Mongoose"
                />
              </ListItem>
            </Box>

            <Box className={clsx("iconsXtext")}>
              <ListItem >
                <ListItemIcon>
                  <CodeIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="Git"
                />
              </ListItem>
            </Box>
          </List>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" color="primary" align="center" paragraph>
          My professional <span className="highlight">background</span> is a good add to my skills. I hold a <span className="highlight">BSc in Business Administration and Management</span>, and a <span className="highlight">MSc in Diplomatic Studies</span>. Diverse experience developing projects, public relations, and working with C-Suite executives and high-ranking officials. <span className="highlight">Led teams</span> of 5-10 people and <span className="highlight">managed projects</span> funded by the US Department of State, NATO and Dutch Ministry of Foreign Affairs. I lived in quite a few places and had to adapt fast to new environments. The instincts that this experience has created are keeping me curious about things. <span className="highlight">My goal is to get better at programming everyday</span>.
        </Typography>
      </Grid>

      {/* <Button className={classes.btns} variant="contained" color="primary" ><RouterLink id='linkCv' to='../DanielTraciResume.pdf' target="_blank" download><b>Download CV</b></RouterLink></Button> */}

      <Box display="flex" justifyContent="center">
        <Button className={classes.btns} variant="contained" color="primary" target="_blank" href="../DanielTraciResume.pdf" download>Download my resume</Button>
      </Box>

      {/* Projects---------------------
          --------------------------------------------------*/}
      <div id="projects" />
      <Box display="flex" justifyContent="center" className={classes.sectionTitles}>
        <Typography variant="h3" color="primary" className="bgTextColor">
          LAST PROJECT
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt="CSI LINUX"
                height="320"
                image="./covers/csilinux.png"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom variant="h4" component="h2" align="center">
            CSI Linux
          </Typography>
          <Typography variant="body1" paragraph>
            My first real-world project - I re-designed and developed the website of CSI Linux - an open-source Linux distribution for Digital Forensics and Incident Response. The website was built in MERN Stack and it has a mobile responsive design. Other functionalities are currently being developed and will be added soon.
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Used technologies
          </Typography>
          <Typography variant="body1" align="center" >
            MongoDB, Express, React, Node, Google Material UI, CSS3, HTML5
          </Typography>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Button className={classes.btns} variant="contained" color="primary" href="https://csilinux.com/">Visit CSI Linux</Button>
          </Grid>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="center" className={classes.sectionTitles}>
        <Typography variant="h3" color="primary" className="bgTextColor">
          OLDER PROJECTS
        </Typography>
      </Box>

      <Grid container spacing={3} >
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt="seeintel"
                height="190"
                image="./covers/seeintel.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  SEEINTEL
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                  SEEINTEL is a search engine app that retrieves threat intelligence from an API about web domains. Users can sign up and perform CRUD operations in their dashboard, which includes saving and deleting search results, writing notes, editing and deleting them. The app was taken down as its capabilities will be integrated in <Link href="https://csilinux.com/">csilinux.com</Link>.
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  Used technologies
                </Typography>
                <Typography variant="body1" align="center">
                  MongoDB, Express, React, Node, Google Material UI, CSS3, HTML5
                </Typography>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <Button variant="contained" className={classes.btns} color="primary" onClick={handleClickOpen}>
                    Watch Demo
                  </Button>
                </Grid>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                  className={classes.dialog}
                >
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <Grid item xs={12}>
                        <Card className="cardProps">
                          <CardActionArea>
                            <div className='player-wrapper'>
                              <ReactPlayer controls className='react-player' width='100%'
                                height='100%' url='https://youtu.be/3Q3ocbmw7AU' />
                            </div>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center">
                      <Button onClick={handleClose} color="primary">
                        Close
                      </Button>
                    </Grid>
                  </DialogActions>
                </Dialog>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt="newpeaks"
                height="190"
                image="./covers/newpeaks.png"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  newpeaks
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                  newpeaks is a web app to book ski passes to ski resorts in Europe. Businesses can register on the website to list their ski resorts and add description with pictures. Also, businesses are able to update and delete the created locations. Individuals are able to filter resorts by country. In order to book book a ski pass, the user has to be registered.
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  Used technologies
                </Typography>
                <Typography variant="body1" align="center" >
                  MongoDB, ExpressJS, NodeJS, Handlebars, SCSS/SASS, HTML
                </Typography>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <Button className={classes.btns} variant="contained" color="primary" href="https://newpeaks.herokuapp.com/">Visit newpeaks</Button>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt="CSI LINUX"
                height="190"
                image="./covers/nomadskater.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  Nomad Skater
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                  Nomad Skater is a game about a skateboarder that earns money from tricks while travelling. The player has to avoid the police officers who think that 'skateboarding is a crime'. The speed increases everytime the player scores another 15 points. There's no endgame and you can score as much as humanly possible. The game is addictive.
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  Used technologies
                </Typography>
                <Typography variant="body1" align="center">
                  JavaScript, DOM manipulation, CSS3, HTML5 Canvas
                </Typography>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <Button className={classes.btns} variant="contained" color="primary" href="https://danieltraci.github.io/Nomad-Skater/">Play Nomad Skater</Button>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="center" flexDirection="column" className={classes.sectionTitles}>
        <Typography variant="h6" color="primary" align="center" paragraph>
          ...and last but not least
        </Typography>
        <Typography variant="h5" color="primary" align="center">
          <span className="highlight">This portfolio was built with React, Google Material UI, CSS3, and HTML5
          </span>
        </Typography>
      </Box>
    </div>
  )
}
