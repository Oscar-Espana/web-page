import WebApplicationTypes from './sections/WebApplicationTypes';
import PartOfInternetWorld from './sections/PartOfInternetWorld';
import Banner from './sections/Banner';
import VisibilityCompany from './sections/VisibilityCompany';
import SliderTech from './sections/SliderTech';
import Questions from './sections/Questions';
import NeedAnUpdate from './components/NeedAnUpdate';
import WebDevelopment from '#constants/seo/WebDevelopment';
import SEO from '#Components/SEO';

const index = () => (
  <>
    <SEO {...WebDevelopment} />
    <Banner />
    <VisibilityCompany />
    <NeedAnUpdate />
    <WebApplicationTypes />
    <SliderTech />
    <PartOfInternetWorld />
    <Questions />
  </>
);

export default index;
