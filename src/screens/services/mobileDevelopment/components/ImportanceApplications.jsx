import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import styles from '../styles/ImportanceApplications';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';

const useStyles = makeStyles(styles);

const ImportanceAplications = () => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative">
      <BackgroundImage
        image="/assets/images/figures/bloque2.png"
        height={829}
      />
      <CustomContainer>
        <Grid container className={classes.root}>
          <Grid item xs={false} md={1} />
          <Grid item xs={12} md={5} className={classes.gridImage}>
            <Box component="figure">
              <Image
                src="/assets/images/importancia-aplicaciones-moviles.png"
                width={504}
                height={694}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} className={classes.gridContent}>
            <Box component="article">
              <Typography variant="h2" className={classes.title}>
                Importancia de las aplicaciones móviles
              </Typography>
              <Typography variant="body1">
                Crear una aplicación móvil para tu empresa te conecta con tus
                clientes y mejora la experiencia en la compra de productos y
                servicios.
              </Typography>
              <Box className={classes.images}>
                <Box component="figure" className={classes.figureLeft}>
                  <Image
                    src="/assets/images/google-play.png"
                    width={88}
                    height={88}
                  />
                </Box>
                <Box component="figure" className={classes.figureLeft}>
                  <Image
                    src="/assets/images/apple-store.png"
                    width={88}
                    height={88}
                  />
                </Box>
              </Box>
              <Typography variant="body1">
                Tus productos en las tiendas de aplicaciones móviles a nivel
                mundial
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={false} md={1} />
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default ImportanceAplications;
