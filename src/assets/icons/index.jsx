import React from 'react';
import {
  Phone,
  Mail,
  Facebook,
  LinkedIn,
  Instagram,
  ExpandMore,
} from '@material-ui/icons';
import PropTypes from 'prop-types';

const PropTypesIcon = { className: PropTypes.string };
const defaultPropsIcon = { className: '' };

export const PhoneIcon = ({ className }) => <Phone className={className} />;
export const MailIcon = ({ className }) => <Mail className={className} />;
export const FacebookIcon = ({ className }) => (
  <Facebook className={className} />
);
export const LinkedInIcon = ({ className }) => (
  <LinkedIn className={className} />
);
export const InstagramIcon = ({ className }) => (
  <Instagram className={className} />
);

export const ExpandMoreIcon = ({ className }) => (
  <ExpandMore className={className} />
);

ExpandMoreIcon.propTypes = { ...PropTypesIcon };
ExpandMoreIcon.defaultProps = { ...defaultPropsIcon };

FacebookIcon.propTypes = { ...PropTypesIcon };
FacebookIcon.defaultProps = { ...defaultPropsIcon };

MailIcon.propTypes = { ...PropTypesIcon };
MailIcon.defaultProps = { ...defaultPropsIcon };

PhoneIcon.propTypes = { ...PropTypesIcon };
PhoneIcon.defaultProps = { ...defaultPropsIcon };

LinkedInIcon.propTypes = { ...PropTypesIcon };
LinkedInIcon.defaultProps = { ...defaultPropsIcon };

InstagramIcon.propTypes = { ...PropTypesIcon };
InstagramIcon.defaultProps = { ...defaultPropsIcon };
