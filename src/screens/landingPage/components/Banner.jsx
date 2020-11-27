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
  title,
  description,
  image,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative" bgcolor="primary.light">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Typography variant="h1" className={classes.title}>
              {title}
            </Typography>
            <Typography
              variant="h3"
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
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Banner.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
  title: '',
  description: '',
  image: '',
};

export default Banner;
