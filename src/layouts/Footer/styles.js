import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(8, 0),
    minHeight: 473,
    height: 'auto',
    background: theme.palette.primary.main,
  },
  icon: {
    fontSize: 18,
  },
  contactUs: {
    padding: theme.spacing(8, 0),
  },
  gridContainer: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(4),
  },
  description: {
    marginBottom: theme.spacing(4),
    maxWidth: 531,
  },
  text: {
    marginBottom: theme.spacing(2),
  },
  gridContact: {
    maxWidth: 620,
  },
  descriptionContact: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(9),
  },
  contact: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  borderContactUs: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    borderLeft: '2px solid',
    borderColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0),
      borderLeft: 0,
    },
  },
  action: {
    marginTop: theme.spacing(1),
    color: theme.palette.common.black,
  },
  image: {
    width: 169,
    height: 32,
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      margin: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
    [theme.breakpoints.up('lg')]: {
      margin: 0,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
