import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/index';
import '../src/assets/css/globals.css';

// Here you have ( children ) => children, but nextJS return children into field not on object
const NoLayout = ({ children }) => children;

const MyApp = ({ Component, pageProps }) => {
  const { layoutProps, ...restPageProps } = pageProps;
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const Layout = Component.layout || NoLayout;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          rel="preload"
          href="/fonts/Raleway/Raleway-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Raleway/Raleway-Medium.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Raleway/Raleway-SemiBold.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Raleway/Raleway-Bold.woff2"
          as="font"
          crossOrigin=""
        />
        <link href="/fonts/Raleway/fonts.css" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout {...layoutProps}>
          <>
            <CssBaseline />
            <Component {...restPageProps} />
          </>
        </Layout>
      </ThemeProvider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape(),
};
MyApp.defaultProps = {
  pageProps: {},
};
export default MyApp;
