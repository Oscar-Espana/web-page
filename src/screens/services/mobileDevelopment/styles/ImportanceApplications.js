import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
  mainContent: {
    zIndex: 1,
    position: 'relative',
  },
  gridContent: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      order: '-1',
    },
  },
  gridImage: {
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
    },
  },
  title: {
    paddingBottom: theme.spacing(4),
    color: theme.palette.primary.light,
  },
  images: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  figureLeft: {
    margin: 0,
  },
  figureRight: {
    margin: '0 0 0 15px',
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
