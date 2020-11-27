import PropTypes from 'prop-types';

const styles = (theme) => ({
  menuApp: {
    display: 'flex',
    alignItems: 'center',
    width: `100%`,
  },

  button: {
    textTransform: 'capitalize',
    padding: `0 ${theme.spacing(2)}px`,
  },
  services: {
    textTransform: 'capitalize',
  },
  sectionMenu: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    justifyContent: 'space-around',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'start',
    },
  },
  contactUs: {
    marginLeft: theme.spacing(4),
  },
});

styles.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default styles;
