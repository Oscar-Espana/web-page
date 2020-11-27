import PropTypes from 'prop-types';

const styles = (theme) => ({
  main: {
    background: theme.palette.primary.contrastText,
    filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
    [theme.breakpoints.up('lg')]: {
      filter: `drop-shadow(9px 9px 16px rgba(0, 0, 0, 0.25)); color: black`,
    },
    color: theme.palette.common.black,
  },
  fade: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    background: 'white',
    boxShadow: `rgba(0, 0, 0, 0.25) 0px 4px 4px, rgba(0, 0, 0, 0.25) 0px 4px 4px inset`,
  },
  sectionLogo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'star',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
