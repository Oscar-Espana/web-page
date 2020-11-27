import { makeStyles, Box, Typography } from '@material-ui/core';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/NeedAnUpdate';

const useStyles = makeStyles(styles);

const NeedAnUpdate = () => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative">
      <BackgroundImage
        image="/assets/images/necesitas-una-actualizacion.png"
        height={672}
      />
      <CustomContainer>
        <Box className={classes.container} pt={26} pb={50}>
          <Typography variant="h2" className={classes.title}>
            ¿Necesitas una actualización?
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Un sitio web desactualizado tarda más en cargarse y no funciona
            correctamente. Te asesoramos en mejorar la imagen y rendimiento de
            tu web.
          </Typography>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default NeedAnUpdate;
