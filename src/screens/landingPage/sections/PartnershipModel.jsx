import PartnershipModel from '../components/PartnershipModel';
import { partnershipModels } from '#constants/LandingPage';

const PartnershipModelSection = () => (
  <PartnershipModel
    title="Modelos de partnership"
    description="Una asociación perfecta que entrega los resultados esperados de acuerdo a tus necesidades. Tenemos todo lo que necesitas."
    image="/assets/images/modelo-partnership.png"
    backgroundImage="/assets/images/figures/landingPage/bloque4.png"
    heightImage={1262}
    partnershipModel={partnershipModels}
  />
);

export default PartnershipModelSection;
