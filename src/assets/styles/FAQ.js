import PropTypes from 'prop-types';

const styles = (theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
