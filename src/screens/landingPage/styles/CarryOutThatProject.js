import PropTypes from 'prop-types';

const styles = (theme) => ({
  backgroundSection: {
    background: theme.palette.secondary.light,
    marginBottom: theme.spacing(8),
  },
  content: {
    paddingTop: theme.spacing(4),
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
    textAlign: 'center',
  },
  contentInformation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 288,
    height: 229,
    position: 'relative',
    bottom: `-${theme.spacing(8)}px`,
  },
  [theme.breakpoints.up('sm')]: {
    image: {
      width: 412,
      height: 327,
    },
  },
  [theme.breakpoints.up('lg')]: {
    content: {
      paddingTop: theme.spacing(8),
      display: 'flex',
    },
    contentInformation: {
      paddingRight: theme.spacing(2),
    },
    image: {
      width: 502,
      height: 402,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
