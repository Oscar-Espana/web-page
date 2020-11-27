import FAQ from '#Components/FAQ';
import { questions } from '#constants/services/MobileDevelopment';

const Questions = () => (
  <FAQ
    titlePart1="Preguntas"
    titlePart2="frecuentes"
    questions={questions}
    backgroundImage="/assets/images/figures/landingPage/bloque5.png"
    heightImage={471}
  />
);

export default Questions;
