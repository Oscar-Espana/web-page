import Banner from './sections/Banner';
import OnlineSolution from './components/OnlineSolution';
import Services from './components/Services';
import PartnershipModel from './sections/PartnershipModel';
import CarryOutThatProject from './components/CarryOutThatProject';
import Questions from './sections/Questions';
import SEO from '#Components/SEO';
import LandingPage from '#constants/seo/LandingPage';

const index = () => (
  <>
    <SEO {...LandingPage} />
    <Banner />
    <OnlineSolution />
    <Services />
    <PartnershipModel />
    <CarryOutThatProject />
    <Questions />
  </>
);

export default index;
