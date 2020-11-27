import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@material-ui/core';

const LinkWithIcon = ({ icon, label, href }) => (
  <Link href={href} color="inherit">
    <Box display="flex" style={{ color: 'white' }} mb={2}>
      {icon}
      <Typography color="inherit" style={{ marginLeft: 16 }}>
        {label}
      </Typography>
    </Box>
  </Link>
);
LinkWithIcon.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  href: PropTypes.string,
};
LinkWithIcon.defaultProps = {
  icon: <></>,
  label: '',
  href: '#',
};
export default LinkWithIcon;
