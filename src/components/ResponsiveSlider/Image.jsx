import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const Image = ({ image, label }) => (
  <Box m={2} display="flex" flexDirection="column" alignItems="center">
    <img
      style={{
        objectFit: 'cover',
        maxWidth: 100,
        maxHeight: 100,
        width: 'auto',
      }}
      src={image}
      alt={label}
    />
    <p>{label}</p>
  </Box>
);
Image.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Image;
