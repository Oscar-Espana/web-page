import Layout from '../src/layouts';
import LandingPage from '#screens/landingPage';

const Index = () => <LandingPage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'index' },
    },
  },
});

Index.layout = Layout;
export default Index;
