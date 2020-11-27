import { Box, Button, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import styles from './style';
import Subtitle from '#Components/Subtitle';
import Link from '#Components/CustomLink';

const useStyles = makeStyles(styles);
const NotFountPage = () => {
  const classes = useStyles();
  return (
    <Box component="section" bgcolor="primary.light">
      <Box className={classes.root}>
        <Subtitle head="No encontramos lo que estabas buscando" white />
        <Box className={classes.image}>
          <Image
            src="/assets/images/404.png"
            alt="Picture of the author"
            layout="fill"
          />
        </Box>
        <Link href="/">
          <Button variant="h4" component="p" className={classes.button}>
            Volver al inicio
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFountPage;
