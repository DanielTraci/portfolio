import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from '@material-ui/core/Button';
import clsx from 'clsx'
import logo from "./logo.png"
import {Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    margin: theme.spacing(1),
  },
  btnsMobile: {
    margin: theme.spacing(0, 1, 0, 1),
    width: "120px",
    '&:hover': {
      backgroundColor: "#0053e1",
    },
  },
  btnsDesktop: {
    margin: theme.spacing(0, 1, 0, 1),
    width: "120px",
  },
  title: {
    flexGrow: 1,

  },
  navBarFlex: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    marginRight: theme.spacing(4),
  },
  color: {
    backgroundColor: "#1d1d1d"
  },
  logoDesktop: {
    maxWidth: 50,
  },
}));

const MenuAppBar = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.color} >
        <Toolbar>
          <Typography className={classes.title}>
            <RouterLink className="csiLogo"><img src={logo} alt="csilinuxlogo" className={classes.logoDesktop} /></RouterLink>
          </Typography>
          {
            isMobile ? (
              <>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                  onClick={handleMenu}>
                  <MenuIcon color="secondary" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <Button size="large" className={clsx("navBarPublicationsLink", classes.btnsMobile)} href="#about">About me</Button>
                  <Button size="large" className={clsx("navBarPublicationsLink", classes.btnsMobile)} href="#projects">Projects</Button>
                  <Button size="large" className={clsx("navBarPublicationsLink", classes.btnsMobile)} href="#contact"> Contact me</Button>
                </Menu>
              </>
            ) : (
              <div className={classes.navBarFlex}>
                <Button size="large" color="secondary" className={clsx("navBarPublicationsLink", classes.btnsDesktop)} href="#about">About me</Button>
                <Button size="large" color="secondary" className={clsx("navBarPublicationsLink", classes.btnsDesktop)} href="#projects">Projects</Button>
                <Button size="large" color="secondary" className={clsx("navBarPublicationsLink", classes.btnsDesktop)} href="#contact"> Contact me</Button>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default MenuAppBar
