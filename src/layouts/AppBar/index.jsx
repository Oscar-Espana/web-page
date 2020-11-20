import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, Hidden, Box, Typography,
  IconButton, MenuItem, Menu, Button, useScrollTrigger, 
Fade, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import CustomDrawer from './CustomDrawer';
import styles from './styles';
import Options from './Options';
import OutsideAlerter from './OutsideAlerter';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(styles);

const Navigation = ({ index, props }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openServices = Boolean(anchorEl);

  const handleMenuServices = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const [showNav, setShowNav] = useState(false);
  const handleClose1 = () => setShowNav(false);

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar position="static">
          <Toolbar className={classes.main}>
            <Hidden mdUp>
              <Box className={classes.sectionLogo}>
                <Button className={classes.logo} aria-label="logo Initgrammers">
                  <LogoInitgrammers />
                </Button>
              </Box>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <div className={classes.title}>
                <Button className={classes.logo} aria-label="logo Initgrammers">
                  <LogoInitgrammers />
                </Button>
                <Fade timeout={800} in={showNav} className={classes.fade}>
                <OutsideAlerter callback={handleClose1}>
                <Options visible={showNav} />
              </OutsideAlerter>
                </Fade>
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <CustomDrawer
        classSelected={classes.selected}
        index={index}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
    </div>
  );
};
Navigation.propTypes = {
  index: PropTypes.string,
};
Navigation.defaultProps = { index: 'home' };
export default Navigation;
