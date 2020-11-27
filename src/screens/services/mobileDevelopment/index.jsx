import Banner from './components/Banner';
import ImportanceApplications from './components/ImportanceApplications';
import ApplicationsAtYourFingertips from './sections/ApplicationsAtYourFingertips';
import MobileApplicationTypes from './sections/MobileApplicationTypes';
import Questions from './sections/Questions';
import SliderTech from './sections/SliderTech';
import SEO from '#Components/SEO';
import MobileDevelopment from '#constants/seo/MobileDevelopment';

const index = () => (
  <>
    <SEO {...MobileDevelopment} />
    <Banner />
    <ImportanceApplications />
    <SliderTech />
    <MobileApplicationTypes />
    <ApplicationsAtYourFingertips />
    <Questions />
  </>
);

export default index;
