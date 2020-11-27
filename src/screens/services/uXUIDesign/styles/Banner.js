import PropTypes from 'prop-types';

const styles = (theme) => ({
  backgroundSection: {
    marginBottom: theme.spacing(8),
  },
  content: {
    paddingTop: theme.spacing(12),
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
  },
  contentInformation: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 288,
    height: 343,
    position: 'relative',
    bottom: `-${theme.spacing(8)}px`,
  },
  [theme.breakpoints.up('sm')]: {
    image: {
      width: 412,
      height: 490,
    },
  },
  [theme.breakpoints.up('lg')]: {
    content: {
      paddingTop: theme.spacing(8),
      display: 'flex',
    },
    contentInformation: {
      paddingRight: theme.spacing(2),
      justifyContent: 'center',
    },
    image: {
      width: 504,
      height: 600,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
