import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 188,
  },
  titleService: {
    textAlign: 'center',
    paddingTop: theme.spacing(1),
  },
}));

const CardService = ({ image, service }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Box component="figure">
        <Image width={188} height={169} src={image} />
      </Box>
      <Typography variant="h4" className={classes.titleService}>
        {service}
      </Typography>
    </Box>
  );
};

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};

export default CardService;
