import {
  makeStyles,
  Button,
  Box,
  Typography,
  Hidden,
  Fade,
} from '@material-ui/core';
import Link from 'next/link';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import CustomLink from '#Components/CustomLink';
import styles from '../styles/MenuDesktop';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks } from '#app/constants/contacts';
import routes from '#app/routes/';
import Options from './Options';
import OutsideAlerter from './Outsider';

const useStyles = makeStyles(styles);

const menu = [
  { label: 'Portafolio', href: routes.portfolio },
  // { label: '¿Quiénes somos?', href: routes.aboutUs },
  // { label: 'Blog', href: routes.blog },
  // { label: 'Contacto', href: routes.contact },
];

const MenuDesktop = ({
  showServices,
  handleDrawerOpen,
  indexMenu,
  handleClose,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.menuApp}>
        <CustomLink href="/">
          <Button className={classes.logo} aria-label="logo Initgrammers">
            <LogoInitgrammers />
          </Button>
        </CustomLink>
        <Box className={classes.sectionMenu}>
          <Button
            aria-controls="menu-servicios"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
            color="inherit"
            endIcon={showServices ? <ExpandLess /> : <ExpandMore />}
          >
            <Typography className={classes.services} variant="body2">
              Servicios
            </Typography>
          </Button>

          {menu.map((item, key) => (
            <Link key={key} href={item.href}>
              <a className={classes.button}>
                <Typography variant="body2" align="center">
                  {item.label}
                </Typography>
              </a>
            </Link>
          ))}
        </Box>
        <Box>
          <Hidden mdDown>
            <ContactUsButton href={contactsLinks.general} />
          </Hidden>
        </Box>
      </Box>
      <Fade timeout={800} in={showServices} className={classes.fade}>
        <Box bgcolor="white">
          <OutsideAlerter callback={handleClose}>
            <Options
              visible={showServices}
              indexMenu={indexMenu}
              handleDrawerOpen={handleDrawerOpen}
            />
          </OutsideAlerter>
        </Box>
      </Fade>
    </>
  );
};
MenuDesktop.propTypes = {
  showServices: PropTypes.bool,
  handleDrawerOpen: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
MenuDesktop.defaultProps = {
  showServices: false,
};
export default MenuDesktop;
