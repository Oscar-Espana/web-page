import Layout from '../../src/layouts';
import UXUIDesignPage from '#screens/services/uXUIDesign';

const Page = () => <UXUIDesignPage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'UXUIDesign' },
    },
  },
});

Page.layout = Layout;
export default Page;
