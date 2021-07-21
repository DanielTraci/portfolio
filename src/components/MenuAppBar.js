import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from '@material-ui/core/Button';
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  margin: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(10)
  },
  navBarFlex: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    marginRight: theme.spacing(6),
  },
  logoDesktop: {
    maxWidth: 150,
  },
  color: {
    backgroundColor: "#1d1d1d"
  },
}));

const MenuAppBar = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.color} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Daniel's porfolio
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
                  {/*                   <MenuItem onClick={() => handleMenuClick('#about')}>ABOUT ME</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/tutorials')}>PROJECTS</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/tutorials')}>CONTACT ME</MenuItem> */}
                  <Button size="large" className={clsx("navBarPublicationsLink", classes.margin)} href="#about">About me</Button>
                  <Button size="large" className={clsx("navBarPublicationsLink", classes.margin)} href="#projects">Projects</Button>
                  <Button size="large" className={clsx("navBarPublicationsLink", classes.margin)} href="#contact"> Contact me</Button>
                </Menu>
              </>
            ) : (
              <div className={classes.navBarFlex}>
                <Button size="large" color="secondary" className={clsx("navBarPublicationsLink", classes.margin)} href="#about">About me</Button>
                <Button size="large" color="secondary" className={clsx("navBarPublicationsLink", classes.margin)} href="#projects">Projects</Button>
                <Button size="large" color="secondary" className={clsx("navBarPublicationsLink", classes.margin)} href="#contact"> Contact me</Button>
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
