import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx'
import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#0053e1",
    marginTop: theme.spacing(15),
  },
  footer: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15)
  },
  icons: {
    fontSize: "60px"    
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div>
      <Divider variant="fullWidth" className={clsx(classes.divider)} id="contact" />
      <Grid container spacing={4} className={clsx(classes.footer)}>
        <Grid item xs={12} >
          <Box display="flex" justifyContent="center" >
          </Box>
          <Box display="flex" justifyContent="center">
            <IconButton href="https://www.linkedin.com/in/edanieltraci/">
              <LinkedInIcon color="error" className={classes.icons} />
            </IconButton>
            <IconButton href="https://github.com/DanielTraci">
              <GitHubIcon color="error" className={classes.icons} />
            </IconButton>
            <IconButton href="mailto:tracidaniel.td@gmail.com">
              <MailIcon color="error" className={classes.icons} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} >
          <div className={classes.headerContent}>
            <Typed
              strings={[
                "<>Let's connect",
                "<>I can teach you snowboarding",
                "<>Let's connect",
                "<>We can dream together about solutions to production bugs",
                "<>Let's connect",
                "<>I know a thing or two about great wines",
                "<>Let's connect",
                "<>I hope you're into Marvel Cinematic Universe",
                "<>Let's connect",
                "<>From DC, only Batman and Joker can get a pass. Period!",
              ]}
              typeSpeed={40}
              backSpeed={10} loop className="h5FontSize"
            ></Typed>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}
