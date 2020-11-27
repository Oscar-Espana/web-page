import PropTypes from 'prop-types';
import { makeStyles, Container } from '@material-ui/core';
import styles from '../assets/styles/CustomContainer';

const useStyles = makeStyles(styles);

const CustomContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.mainContent}>
      {children}
    </Container>
  );
};

CustomContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CustomContainer;
