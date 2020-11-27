import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, useTheme } from '@material-ui/core';

const LinkIcon = ({ icon, href, size }) => {
  const { palette } = useTheme();
  return (
    <Link href={href} target="_blank">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={size}
        height={size}
        borderRadius={10}
        bgcolor={palette.primary.contrastText}
        ml={2}
      >
        {icon}
      </Box>
    </Link>
  );
};
LinkIcon.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string,
  size: PropTypes.number,
};
LinkIcon.defaultProps = {
  icon: <></>,
  size: 24,
  href: '#',
};
export default LinkIcon;
