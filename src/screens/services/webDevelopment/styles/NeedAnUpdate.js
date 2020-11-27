import PropTypes from 'prop-types';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  [theme.breakpoints.up('lg')]: {
    container: {
      paddingTop: theme.spacing(26),
      paddingBottom: theme.spacing(50),
    },
    title: {
      color: theme.palette.primary.main,
    },
    description: {
      width: 400,
      paddingTop: theme.spacing(4),
      textAlign: 'center',
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
