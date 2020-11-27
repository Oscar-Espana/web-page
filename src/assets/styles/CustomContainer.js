import PropTypes from 'prop-types';

const styles = (theme) => ({
  mainContent: {
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing(23)}px`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `0 ${theme.spacing(13)}px`,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
