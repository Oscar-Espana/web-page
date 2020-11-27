import FAQ from '#Components/FAQ';
import { questions } from '#constants/services/MobileDevelopment';

const Questions = () => (
  <FAQ titlePart1="Preguntas" titlePart2="frecuentes" questions={questions} />
);

export default Questions;
