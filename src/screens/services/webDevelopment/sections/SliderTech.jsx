import SliderTechnologies from '#Components/SliderTechnologies';
import { WebTechnologies } from '#app/constants/services/WebDevelopment';

const SliderTech = () => (
  <SliderTechnologies
    title="Tecnologías con las que trabajamos para el desarrollo web"
    technologies={WebTechnologies}
  />
);

export default SliderTech;
