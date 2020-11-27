import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    height: 'auto',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: 392,
      padding: theme.spacing(5, 10),
    },
  },
  button: {
    background: theme.palette.primary.contrastText,
    border: 'none',
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  service: {
    display: 'flex',
    '&:hover': {
      color: theme.palette.primary.main,
      '&>svg': {
        fill: theme.palette.primary.main,
      },
    },
  },
  descriptionService: {
    paddingLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  selected: {
    color: theme.palette.primary.main,
    padding: `${theme.spacing(0.5)}px 0`,
    border: 0,
    borderRadius: 5,
  },
});

styles.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default styles;
