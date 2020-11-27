import PropTypes from 'prop-types';
import CustomMenu from '#Components/Menu';

const Navigation = ({ index }) => <CustomMenu indexMenu={index} />;
Navigation.propTypes = {
  index: PropTypes.string,
};
Navigation.defaultProps = { index: 'home' };
export default Navigation;
