import { Box, Typography, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/OnlineSolution';
import Subtitle from '#Components/Subtitle';

const useStyles = makeStyles(styles);

const OnlineSolution = () => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative">
      <BackgroundImage
        image="/assets/images/figures/landingPage/bloque2.png"
        height={628}
      />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Subtitle
              variant="h2"
              component="h2"
              head="Encuentra la solución en línea"
              mb={0}
            />
            <Typography variant="body1" className={classes.description}>
              Fusionamos el diseño y el desarrollo en cada uno de los proyectos.
              Nuestro trabajo es asesorarte en todo el proceso para que puedas
              elegir la mejor opción para llevar a cabo esa idea que tienes en
              mente. A través de la tecnología te ayudamos a cumplir tus
              objetivos con un trabajo a tiempo y orientado a resultados.
            </Typography>
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src="/assets/images/solucion-en-linea.png"
                layout="fill"
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default OnlineSolution;
