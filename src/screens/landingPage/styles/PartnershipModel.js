import PropTypes from 'prop-types';

const styles = (theme) => ({
  section: {
    background: `rgba(163, 18, 91, 0.04)`,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  image: {
    width: 288,
    height: 274,
    position: 'relative',
    marginBottom: theme.spacing(4),
  },

  description: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
  button: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
  services: {
    marginTop: theme.spacing(5),
  },
  modelPartnership: {
    '&:nth-child(1n)': {
      marginBottom: theme.spacing(4),
    },
  },
  [theme.breakpoints.up('sm')]: {
    image: {
      width: 552,
      height: 525,
      position: 'relative',
      marginBottom: theme.spacing(4),
    },
    modelPartnership: {
      width: 288,
    },
  },
  [theme.breakpoints.up('lg')]: {
    image: {
      width: 608,
      height: 577,
      position: 'relative',
      marginBottom: theme.spacing(4),
    },
    services: {
      display: 'flex',
      justifyContent: 'space-between',
      width: `100%`,
    },
  },
});
styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
