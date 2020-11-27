import { makeStyles, Box, Hidden } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../assets/styles/BackgroundImage';

const useStyles = ({ height }) => makeStyles((theme) => styles(theme, height));

const BackgroundImage = ({ height, image }) => {
  const classes = useStyles(height);

  return (
    <>
      {height > 0 && (
        <Hidden mdDown>
          <Box className={classes.containerBackgroundImage}>
            <Image src={image} layout="fill" />
          </Box>
        </Hidden>
      )}
    </>
  );
};

BackgroundImage.propTypes = {
  height: PropTypes.number,
  image: PropTypes.string,
};

BackgroundImage.defaultProps = {
  height: 0,
  image: '',
};
export default BackgroundImage;
