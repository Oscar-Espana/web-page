import PropTypes from 'prop-types';

const styles = (theme, heightAux) => ({
  containerBackgroundImage: {
    width: `100%`,
    height: heightAux,
    position: 'absolute',
    top: 0,
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
  height: PropTypes.number,
};

export default styles;
