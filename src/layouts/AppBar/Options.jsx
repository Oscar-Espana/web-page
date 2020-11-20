import React, { useState } from 'react';
import { makeStyles, Box, Typography, MenuItem, Menu, Button } from '@material-ui/core';
import Link from 'next/link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './styles';

const useStyles = makeStyles(styles);

const Options = ({ index }) => {
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
  // const handleClose = () => setShowNav(false);

  return (

    <Box>
      <Button
        aria-label="Servicios"
        aria-controls="menu-servicios"
        aria-haspopup="true"
        onClick={handleMenuServices}
        className={classes.button}
        color="inherit"
        endIcon={<ExpandMoreIcon />}
      >
        <Typography variant="body2">Servicios</Typography>
      </Button>
      <Menu
        id="menu-servicios"
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
        open={openServices}
        onClose={handleClose}
      >
        <MenuItem
          className={clsx(
            {},
            {
              [classes.selected]: index === 'home',
            }
          )}
          onClick={handleClose}
        >
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </MenuItem>
        <MenuItem
          className={clsx({
            [classes.selected]: index === 'WebDevelopment',
          })}
          onClick={handleClose}
        >
          <Link href="/services/WebDevelopment">
            <a>Desarrollo de aplicaciones web </a>
          </Link>
        </MenuItem>
        <MenuItem
          className={clsx({
            [classes.selected]: index === 'MobileDevelopment',
          })}
          onClick={handleClose}
        >
          <Link href="/services/MobileDevelopment">
            <a>Desarrollo de aplicaciones móviles </a>
          </Link>
        </MenuItem>
        <MenuItem
          className={clsx({
            [classes.selected]: index === 'PWADevelopment',
          })}
          onClick={handleClose}
        >
          <Link href="/Services/PWADevelopment">
            <a>Desarrollo de aplicaciones PWA </a>
          </Link>
        </MenuItem>
        <MenuItem
          className={clsx({
            [classes.selected]: index === 'DigitalMarketing',
          })}
          onClick={handleClose}
        >
          <Link href="/Services/DigitalMarketing">
            <a>Marketing Digital </a>
          </Link>
        </MenuItem>
        <MenuItem
          className={clsx({
            [classes.selected]: index === 'UXUIDesign',
          })}
          onClick={handleClose}
        >
          <Link href="/Services/UXUIDesign">
            <a>Diseño UI/UX</a>
          </Link>
        </MenuItem>
        <MenuItem
          className={clsx({
            [classes.selected]: index === 'Ecommerce',
          })}
          onClick={handleClose}
        >
          <Link href="/Services/Ecommerce">
            <a>Tiendas en línea / E-commerce </a>
          </Link>
        </MenuItem>
      </Menu>

      <Button
        aria-label="Portafolio"
        aria-haspopup="true"
        color="inherit"
        className={classes.button}
      >
        <Typography variant="body2">Portafolio</Typography>
      </Button>

      <Button
        aria-label="Portafolio"
        aria-haspopup="true"
        color="inherit"
        className={classes.button}
      >
        <Typography variant="body2">¿Quiénes somos?</Typography>
      </Button>
      <Button
        aria-label="Portafolio"
        aria-haspopup="true"
        color="inherit"
        className={classes.button}
      >
        <Typography variant="body2">Blog</Typography>
      </Button>
      <Button
        aria-label="Portafolio"
        aria-haspopup="true"
        color="inherit"
        className={classes.button}
      >
        <Typography variant="body2">Contacto</Typography>
      </Button>
    </Box>
  );
};

export default Options;
