import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function CustomDrawer({
  open,
  handleDrawerOpen,
  classSelected,
  index,
}) {
  const classes = useStyles();

  const [openService, setOpenService] = React.useState(false);

  const handleClick = () => {
    setOpenService(!openService);
  };

  return (
    <div>
      <Drawer
        className={classes.fullList}
        anchor="top"
        open={open}
        onClose={handleDrawerOpen}
      >
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Servicios" />
            {openService ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openService} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'WebDevelopment',
                })}
              >
                <Link href="/services/WebDevelopment">
                  <a>Desarrollo de aplicaciones web </a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'MobileDevelopment',
                })}
              >
                <Link href="/services/MobileDevelopment">
                  <a>Desarrollo de aplicaciones móviles </a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'UXUIDesign',
                })}
              >
                <Link href="/Services/UXUIDesign">
                  <a>Diseño UI/UX</a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'PWADevelopment',
                })}
              >
                <Link href="/Services/PWADevelopment">
                  <a>Desarrollo de aplicaciones PWA </a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'Ecommerce',
                })}
              >
                <Link href="/Services/Ecommerce">
                  <a>Tiendas en línea / E-commerce </a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'DigitalMarketing',
                })}
              >
                <Link href="/Services/DigitalMarketing">
                  <a>Marketing Digital </a>
                </Link>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemText primary="Portafolio" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="¿Quiénes somos?" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

CustomDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  classSelected: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
