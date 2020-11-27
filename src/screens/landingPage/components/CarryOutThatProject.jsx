import { makeStyles, Box, Typography, Button, Link } from '@material-ui/core';
import Image from 'next/image';
import styles from '../styles/CarryOutThatProject';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Subtitle from '#Components/Subtitle';

const useStyles = makeStyles(styles);

const Banner = () => {
  const classes = useStyles();
  return (
    <Box
      component="section"
      position="relative"
      className={classes.backgroundSection}
    >
      <BackgroundImage />
      <CustomContainer>
        <Box className={classes.content}>
          <Box component="article" className={classes.contentInformation}>
            <Subtitle
              black
              variant="h1"
              component="h2"
              head="¿Aún pensando cómo "
              emphasis="llevar a cabo ese proyecto?"
              mb={0}
              align="center"
            />
            <Typography
              variant="body1"
              component="p"
              className={classes.description}
            >
              Tomamos una idea y la transformamos en una obra maestra digital.
              Nuestra pasión por la tecnología y deseo de hacer las cosas
              diferentes
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
                src="/assets/images/pensado-como-llevar-a-cabo-tu-proyecto.png"
                layout="fill"
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Banner;
