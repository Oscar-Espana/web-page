import {
  makeStyles,
  Box,
  Container,
  Typography,
  Button,
  Hidden,
  Link,
} from '@material-ui/core';
import Image from 'next/image';
import styles from '../styles/Banner';

const useStyles = makeStyles(styles);

const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.mainSection}>
      <Hidden mdDown>
        <Box className={classes.containerBackgroundImage}>
          <Image src="/assets/images/figures/bloque1.png" layout="fill" />
        </Box>
      </Hidden>
      <Container fixed className={classes.container}>
        <Box component="article" className={classes.detailsContent}>
          <Typography variant="h1" className={classes.title}>
            Desarrollo y diseño de aplicaciones
            <span> móviles </span>
            iOS y Android
          </Typography>
          <Typography
            variant="h2"
            component="p"
            className={classes.description}
          >
            Tus productos en el bolsillo de tus clientes
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
              src="/assets/images/diseno-desarrollo-aplicaciones-moviles-ios-android-ecuador.png"
              layout="fill"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
