import React, { useState } from 'react';
import {
  Button,
  Fade,
  Box,
  Hidden,
  Toolbar,
  AppBar,
  makeStyles,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import Options from './Options';
import OutsideAlerter from '../Outsider';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import MenuDesktop from './MenuDesktop';
import styles from '../../assets/styles/Menu';
import CustomLink from '#Components/CustomLink';

const useStyles = makeStyles(styles);

const CustomMenu = ({ indexMenu }) => {
  const classes = useStyles();

  const [showNav, setShowNav] = useState(false);

  const handleDrawerOpen = () => {
    setShowNav(!showNav);
  };

  const handleClose = () => setShowNav(null);

  return (
    <>
      <AppBar component="nav" position="sticky" top={0}>
        <Toolbar className={classes.main}>
          <Hidden mdUp>
            <Box className={classes.sectionLogo}>
              <CustomLink href="/">
                <Button className={classes.logo} aria-label="logo Initgrammers">
                  <LogoInitgrammers />
                </Button>
              </CustomLink>
            </Box>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              {showNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Hidden>

          <Hidden smDown>
            <MenuDesktop
              showServices={showNav}
              handleDrawerOpen={handleDrawerOpen}
            />
          </Hidden>
        </Toolbar>

        <Fade timeout={800} in={showNav} className={classes.fade}>
          <Box bgcolor="white">
            <OutsideAlerter callback={handleClose}>
              <Options
                visible={showNav}
                indexMenu={indexMenu}
                handleDrawerOpen={handleDrawerOpen}
              />
            </OutsideAlerter>
          </Box>
        </Fade>
      </AppBar>
    </>
  );
};
CustomMenu.propTypes = {
  indexMenu: PropTypes.string,
};
CustomMenu.defaultProps = {
  indexMenu: '',
};
export default CustomMenu;
