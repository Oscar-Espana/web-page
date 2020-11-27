import { Box, Typography, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/VisibilityCompany';

const useStyles = makeStyles(styles);
const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative" bgcolor="secondary.light">
      <BackgroundImage
        image="/assets/images/figures/webDevelopment/bloque2.png"
        height={511}
      />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Typography variant="h2" className={classes.title}>
              Aumenta la visibilidad de tu empresa
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Una buena presencia en línea ayudará a conseguir más clientes
              potenciales. Nuestro trabajo es crear páginas web con diseños
              atractivos y funcionales. Una página web permite que todo el mundo
              te encuentre y sepa qué es lo que haces y ofreces a tus
              consumidores.
            </Typography>
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src="/assets/images/aumenta-la-visibilidad-de-tu-empresa.png"
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
