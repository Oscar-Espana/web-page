import PropTypes from 'prop-types';
import Link from 'next/link';

const CustomLink = ({ children, href }) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
);
CustomLink.propTypes = {
  children: PropTypes.element,
  href: PropTypes.string,
};
CustomLink.defaultProps = {
  children: '',
  href: '#',
};
export default CustomLink;
