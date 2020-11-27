import PropTypes from 'prop-types';

const styles = (theme) => ({
  detailsContent: {
    paddingTop: theme.spacing(8),
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
    color: theme.palette.common.black,
  },
  actionButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.secondary.main,
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.spacing(4)}px 0`,
  },
  image: {
    width: 288,
    height: 235,
    position: 'relative',
  },
  [theme.breakpoints.up('sm')]: {
    detailsContent: {
      paddingTop: theme.spacing(12),
    },
    containerImage: {
      padding: `${theme.spacing(5)}px 0`,
    },
    image: {
      width: 544,
      height: 449,
    },
  },
  [theme.breakpoints.up('lg')]: {
    container: {
      display: 'flex',
    },
    detailsContent: {
      flex: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 0,
      paddingRight: theme.spacing(2),
    },
    containerImage: {
      flex: 5,
      padding: `${theme.spacing(8)}px 0`,
    },
    image: {
      width: 504,
      height: 382,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
