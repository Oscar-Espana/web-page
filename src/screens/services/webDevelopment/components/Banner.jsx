import { Box, Typography, makeStyles, Button, Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/Banner';

const useStyles = makeStyles(styles);
const Banner = ({
  backgroundImage,
  heightImage,
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Typography variant="h1" className={classes.title}>
              {titlePart1}
              <span>{titlePart2}</span>
              {titlePart3}
            </Typography>
            <Typography
              variant="h2"
              component="p"
              className={classes.description}
            >
              {description}
            </Typography>
            <Box>
              <Link target="_blank" href="https://wa.link/3vbh7y">
                <Button variant="contained" className={classes.actionButton}>
                  Contáctanos
                </Button>
              </Link>
            </Box>
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src={image}
                layout="fill"
                className={classes.mainImage}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  titlePart1: PropTypes.string,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Banner.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
  titlePart1: '',
  titlePart2: '',
  titlePart3: '',
  description: '',
  image: '',
};

export default Banner;
