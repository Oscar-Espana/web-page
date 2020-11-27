import { Typography, makeStyles, Link } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import styles from '../styles';

const useStyles = makeStyles(styles);

const LinkContactUs = ({ question, callToAction, href }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" color="primary">
        {question}
      </Typography>
      <Link target="_blank" href={href}>
        <Typography variant="body2" className={classes.action}>
          {callToAction}
        </Typography>
      </Link>
    </>
  );
};

LinkContactUs.propTypes = {
  question: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkContactUs;
