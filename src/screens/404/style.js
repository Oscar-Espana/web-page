import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3),
  },
  image: {
    position: 'relative',
    width: 300,
    height: 300,
    marginBottom: theme.spacing(4),
  },
  button: {
    color: 'white',
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
