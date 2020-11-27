import SliderTechnologies from '#Components/SliderTechnologies';
import { MobileTechnologies } from '#app/constants/services/MobileDevelopment';

const SliderTech = () => (
  <SliderTechnologies
    title="Tecnologías con las que trabajamos para el desarrollo móvil"
    technologies={MobileTechnologies}
    backgroundImage="/assets/images/figures/bloque3.png"
    heightImage={364}
  />
);

export default SliderTech;
