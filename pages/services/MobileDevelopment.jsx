import Layout from '../../src/layouts';
import MobileDevelopmentPage from '#screens/services/mobileDevelopment/';

const Page = () => <MobileDevelopmentPage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: '2' },
    },
  },
});

Page.layout = Layout;
export default Page;
