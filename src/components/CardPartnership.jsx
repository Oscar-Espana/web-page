import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titlePartnership: {
    textAlign: 'center',
    padding: `${theme.spacing(1)}px 0`,
    color: theme.palette.primary.main,
  },
  description: {},
}));

const CardService = ({ image, title, description }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Box component="figure">
        <Image quality={100} width={100} height={100} src={image} />
      </Box>
      <Typography variant="h4" className={classes.titlePartnership}>
        {title}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {description}
      </Typography>
    </Box>
  );
};

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardService;
