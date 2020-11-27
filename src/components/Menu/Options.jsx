/* eslint-disable no-confusing-arrow */
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';
import { data } from '#constants/Menu';
import styles from './styles/Options';

const useStyles = makeStyles(styles);

const Service = ({
  title,
  subtitle,
  href,
  icon,
  indexMenu,
  id,
  handleDrawerOpen,
}) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      color="common.black"
      component="li"
      onClick={handleDrawerOpen}
      className={classes.button}
    >
      <Link href={href}>
        <a
          className={clsx(classes.service, {
            [classes.selected]: indexMenu === id,
          })}
        >
          {icon}
          <Box className={classes.descriptionService}>
            <Typography component="subtitle1" color="inherit">
              {title}
            </Typography>
            <Typography variant="caption" color="inherit">
              {subtitle}
            </Typography>
          </Box>
        </a>
      </Link>
    </Box>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.shape().isRequired,
  indexMenu: PropTypes.string,
};
Service.defaultProps = {
  indexMenu: '',
};

const Options = ({ indexMenu, handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography color="primary" className={classes.title}>
        Servicios que ofrecemos
      </Typography>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <Service
              {...item}
              indexMenu={indexMenu}
              handleDrawerOpen={handleDrawerOpen}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Options.propTypes = {
  indexMenu: PropTypes.string.isRequired,
};

export default Options;
