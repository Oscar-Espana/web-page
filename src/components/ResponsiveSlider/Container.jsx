import { Box } from '@material-ui/core';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';
import PropTypes from 'prop-types';

const Container = ({ onNextStep, onPrevStep, children }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    height={110}
  >
    <Box onClick={onPrevStep}>
      <ArrowBackIos />
    </Box>
    <Box display="flex" flex={1} justifyContent="center" alignItems="center">
      {children}
    </Box>
    <Box onClick={onNextStep}>
      <ArrowForwardIos />
    </Box>
  </Box>
);
Container.propTypes = {
  onNextStep: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
