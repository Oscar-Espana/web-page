import {
  makeStyles,
  Box,
  Container,
  Button,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';

const useStyle = makeStyles((theme) => ({
  root: {
    height: 670,
  },
  move: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  textBottom: {
    height: 335,
  },
  bottom: {
    width: 504,
    marginBottom: 80,
  },
  contimage: {
    height: 355,
    width: 505,
    position: 'relative',

  },
  [theme.breakpoints.down('md')]: {
    move: {
      flexDirection: 'column',
      flex: 5,
      alignItems: 'center',
      marginTop: 0,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    textBottom: {
      height: 150,
      width: 505,
      marginBottom: 110,
    },
    bottom: {
      marginBottom: 30,
    },
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      height: 630,
      alignContent: 'center',
    },
    move: {
      marginTop: 32,
      
    },
    contimage: {
      height: 235,
      width: 290,
      position: 'relative',
    },
    textBottom: {
      height: 250,
      width: 288,
      marginBottom: 20,
    },
    bottom: {
      width: 288,
      marginBottom: 30,
    },
    
    
    title: {
      
      width: 288,
      display: 'flex',
      
    },
  },
}));

const DevelopmentDesign = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image }) => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Container fixed>
        <Box my={20} className={classes.move}>
          <Box className={classes.textBottom}>
            <Box className={classes.bottom}>
              <Box>
                <Typography variant="h1">
                  Desarrollo y diseño de aplicaciones web en Ecuador.
                </Typography>
              </Box>
              <Box>
              <Typography variant="h3">
                Bienvenido al mundo del internet.
              </Typography>
              </Box>
            </Box>
            <Button variant="contained" color="primary">
              CONTACTANOS
            </Button>
          </Box>
          <Box className={classes.contimage}>
            <Image conten="figuer" src={image} layout="fill" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DevelopmentDesign;
