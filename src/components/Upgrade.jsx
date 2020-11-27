import {
  makeStyles,
  Box,
  Container,
  Button,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';

const useStyle = makeStyles({
  root: {
    height: 755,
  },
  text: {
    height: 192,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
});

const Upgrade = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image }) => {
  const classes = useStyle();

  return (
    <Box className={classes.root} bgcolor="primary">

      <Container>
        <Box my={25}>
          <Box>
            <Typography align="center">
              ¿Necesitamos una Actualización?.
            </Typography>
          </Box>
          <Box>
            <Typography>
              Un sitio web desactualizado tarda más en cargarse y no funciona correctamente. Te asesoramos en mejorar la imagen y rendimiento de tu web.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Upgrade;
