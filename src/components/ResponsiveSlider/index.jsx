import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import Slide from './Slide';
import Image from './Image';

const Slider = ({ data }) => {
  const { breakpoints } = useTheme();
  const matchXS = useMediaQuery(breakpoints.down('xs'));
  const matchLG = useMediaQuery(breakpoints.up('lg'));
  const steps = matchXS ? 2 : 4;
  if (matchLG) {
    return (
      <Box display="flex" justifyContent="center">
        {data.map((item) => (
          <Image key={item.label} image={item.image} label={item.label} />
        ))}
      </Box>
    );
  }
  return <Slide data={data} step={steps} />;
};

Slider.propTypes = {
  data: PropTypes.arrayOf({ image: PropTypes.string, label: PropTypes.string }),
};

Slider.defaultProps = {
  data: [],
};

export default Slider;
