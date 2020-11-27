import PropTypes from 'prop-types';

const styles = (theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  title: {
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
    '& span': {
      color: theme.palette.primary.light,
    },
  },
  description: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
  image: {
    paddingTop: theme.spacing(6),
  },
  button: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
