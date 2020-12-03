import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../assets/styles/InformationWithImageSection';

const InformationWithImageSection = ({
  title,
  description,
  backgroundImage,
  heightImage,
  image,
  imageSizes,
  backgroundPrimayLight,
  backgroundSecondary,
  isImageRight,
  titlePrimaryMain,
  titleBlack,
  descriptionPrimaryLight,
  descriptionBlack,
}) => {
  const classes = styles({ ...imageSizes, isImageRight });
  return (
    <Box
      component="section"
      position="relative"
      className={clsx({
        [classes.backgroundPrimaryLight]: backgroundPrimayLight,
        [classes.backgroundSecondaryMain]: backgroundSecondary,
      })}
    >
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Typography
              variant="h2"
              className={clsx(classes.title, {
                [classes.textPrimaryMain]: titlePrimaryMain,
                [classes.textBlack]: titleBlack,
              })}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              className={clsx(classes.description, {
                [classes.textPrimaryMain]: descriptionPrimaryLight,
                [classes.textBlack]: descriptionBlack,
              })}
            >
              {description}
            </Typography>
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src={image}
                layout="fill"
                alt={title}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

InformationWithImageSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  image: PropTypes.string.isRequired,
  imageSizes: PropTypes.objectOf.isRequired,
  backgroundPrimayLight: PropTypes.bool,
  backgroundSecondary: PropTypes.bool,
  isImageRight: PropTypes.bool,
  titlePrimaryMain: PropTypes.bool,
  titleBlack: PropTypes.bool,
  descriptionPrimaryLight: PropTypes.bool,
  descriptionBlack: PropTypes.bool,
};

InformationWithImageSection.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
  backgroundPrimayLight: false,
  backgroundSecondary: false,
  isImageRight: false,
  titlePrimaryMain: false,
  titleBlack: false,
  descriptionPrimaryLight: false,
  descriptionBlack: false,
};

export default InformationWithImageSection;
