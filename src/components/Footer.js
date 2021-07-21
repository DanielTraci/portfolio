import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx'
import Typed from 'react-typed';
//importing Link as an alias (RouterLink) because Material-UI(MUI) is using "Link" on line 3, 
//if MUI didn't use it, we could have do --> import Link from "react-router-dom" 



const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#0053e1",
    marginTop: theme.spacing(10),
  },
  footer: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  logoDesktop: {
    maxWidth: 125,
  },
  columnSpacing: {
    marginBottom: theme.spacing(6),
  },
  icons: {
    fontSize: "60px"
  }

}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div>
      <Divider variant="fullWidth" className={classes.divider} />

      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <div className={classes.headerContent}>
            <Typed
              strings={[
                "<>Let's connect",
                "<>I can teach you snowboarding",
                "<>We can dream together about solutions to production bugs",
              ]}
              typeSpeed={40}
              backSpeed={10} loop className="h5FontSize"
            ></Typed>
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12} className={clsx(classes.footer)}>
        <Box display="flex" justifyContent="center" >
          <Typography variant="h3" color="primary" className="bgTextColor" id="contact" >
            Let's connect
          </Typography>
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

    </div>
  );
}
