import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import styles from './styles';

const useStyles = makeStyles(styles);

const Subtitle = ({
  head,
  emphasis,
  tail,
  variant,
  component,
  mb,
  mt,
  align,
  black,
  white,
}) => {
  const classes = useStyles();
  return (
    <Box display="flex" mb={mb} mt={mt} justifyContent="center">
      <Typography
        component={component}
        align={align}
        variant={variant}
        className={clsx(classes.title, {
          [classes.black]: black,
          [classes.white]: white,
        })}
      >
        {head}
        <span>{` ${emphasis}`}</span>
        {tail}
      </Typography>
    </Box>
  );
};
Subtitle.propTypes = {
  head: PropTypes.string,
  emphasis: PropTypes.string,
  tail: PropTypes.string,
  variant: PropTypes.string,
  component: PropTypes.string,
  mb: PropTypes.number,
  mt: PropTypes.number,
  align: PropTypes.string,
  black: PropTypes.bool,
  white: PropTypes.bool,
};
Subtitle.defaultProps = {
  head: '',
  emphasis: '',
  tail: '',
  variant: 'h1',
  component: 'h1',
  mb: 4,
  mt: 0,
  align: 'left',
  black: false,
  white: false,
};
export default Subtitle;
