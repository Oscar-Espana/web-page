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
    height: 550,
  },
  move: {
    display: 'flex',
  },
  img: {
    height: 340,
    width: 505,
    position: 'relative',
  },
  
  text: {
    height: 260,
    width: 400,
  },
});

const IncreaseVisibility = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image }) => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.move}>
          <Box className={classes.img}>
            <Image component="figure" src={image} layout="fill" />
          </Box>
          <Box className={classes.text}>
            <Box>
              <Typography align="center">
                Aumenta la visibilidad de tu empresa.
              </Typography>
            </Box>
            <Box>
              <Typography>
                Una buena presencia en línea ayudará a conseguir más clientes potenciales.Nuestro trabajo es crear páginas web con diseños atractivos y funcionales. Una página web permite aque todo el mundo te encuentre y sepa qué es lo que haces y ofreces at us consumidores.
              </Typography>
            </Box>
          </Box>

        </Box>
        
      </Container>
    </Box>
  );
};

export default IncreaseVisibility;
