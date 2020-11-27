import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  properties,
  socialVerifications,
  urlAltern,
}) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />

    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    {/* Properties */}
    {properties.map((item, index) => (
      <meta key={index} property={item.property} content={item.content} />
    ))}
    <meta
      name="google-site-verification"
      content="y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE"
    />
    <meta
      name="facebook-domain-verification"
      content="f6e1m61awoty4uqq75apqhiupih6vb"
    />
    {socialVerifications.map((item) => (
      <meta
        key={item.property}
        property={item.property}
        content={item.content}
      />
    ))}
    <link rel="alternate" href={urlAltern} hrefLang="es-ec" />
    <link rel="alternate" href={urlAltern} hrefLang="x-default" />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="/assets/images/icono-initgrammers.png"
    />
    <link rel="apple-touch-icon" href="/assets/images/icono-initgrammers.png" />
  </Head>
);
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urlAltern: PropTypes.string,
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  socialVerifications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

SEO.defaultProps = {
  title: 'InitGrammers',
  urlAltern: '',
  description: '',
  properties: [],
  socialVerifications: [],
};
export default SEO;
