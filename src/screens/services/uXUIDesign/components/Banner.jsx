import { makeStyles, Box, Typography, Button, Link } from '@material-ui/core';
import Image from 'next/image';
import styles from '../styles/Banner';
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
              component="h1"
              emphasis="Diseño UX UI : Interfaces y experiencia de usuario"
              mb={0}
            />
            <Typography
              variant="h3"
              component="p"
              className={classes.description}
            >
              Diseño innovador, experiencia única
            </Typography>
            <Box>
              <Link target="_blank" href="https://wa.link/3vbh7y">
                <Button variant="contained" color="primary">
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
                src="/assets/images/diseno-ux-ix-interfaces-experiencia-usuario.png"
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
