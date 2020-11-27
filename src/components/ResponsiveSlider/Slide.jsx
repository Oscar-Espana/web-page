import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Image from './Image';

const Slide = ({ data, step }) => {
  const lengthData = data.length;
  const [index, setIndex] = useState({
    from: 0,
    to: 1,
  });

  const onNextStep = () =>
    setIndex((prev) => {
      const newFrom = prev.from + step;
      const newTo = prev.to + step;
      if (newTo > lengthData - 1 || newFrom > lengthData - 1) {
        return { from: lengthData - step, to: lengthData - 1 };
      }
      return { from: newFrom, to: newTo };
    });

  const onPrevStep = () =>
    setIndex((prev) => {
      const newFrom = prev.from - step;
      const newTo = prev.to - step;
      if (newTo <= 0 || newFrom <= 0) {
        return { from: 0, to: step };
      }
      return { from: newFrom, to: newTo };
    });

  const arrayData = [];
  const limitDown = index.from > index.to ? index.to : index.from;

  for (let i = limitDown; i < limitDown + step; i += 1) {
    arrayData.push(i);
  }

  const renderListSlide = (items) =>
    items.map(
      (_index) =>
        data[_index] && (
          <Image
            key={_index}
            image={data[_index].image}
            label={data[_index].label}
          />
        )
    );

  return (
    <>
      <Container onNextStep={onNextStep} onPrevStep={onPrevStep}>
        {renderListSlide(arrayData)}
      </Container>
    </>
  );
};
Slide.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, label: PropTypes.string })
  ),
  step: PropTypes.number,
};

Slide.defaultProps = {
  data: [],
  step: 2,
};

export default Slide;
