import { makeStyles, Box, Button, Typography, Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../assets/styles/CallToActionType';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';

const useStyles = makeStyles(styles);

const CallToActionSection = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image,
  backgroundImage,
  heightImage,
}) => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box component="article" className={classes.content}>
          <Subtitle
            black
            head={titlePart1}
            emphasis={titlePart2}
            tail={titlePart3}
            align="center"
            mb={4}
          />
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
          <Link target="_blank" href="https://wa.link/3vbh7y">
            <Button variant="contained" className={classes.button}>
              CONTÁCTANOS
            </Button>
          </Link>

          <Box component="figure" className={classes.image}>
            <Image src={image} width={500} height={550} />
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

CallToActionSection.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
};

CallToActionSection.defaultProps = {
  titlePart2: '',
  titlePart3: '',
  backgroundImage: '',
  heightImage: 0,
};
export default CallToActionSection;
