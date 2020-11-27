import { makeStyles, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../assets/styles/FAQ';
import Subtitle from '#Components/Subtitle';
import Accordion from '#Components/Accordion';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';

const useStyles = makeStyles(styles);

const FAQ = ({
  titlePart1,
  titlePart2,
  titlePart3,
  questions,
  backgroundImage,
  heightImage,
}) => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box component="article" className={classes.content}>
          <Subtitle
            black
            head={titlePart1}
            emphasis={titlePart2}
            tail={titlePart3}
            align="center"
            mb={4}
          />
          {questions.map(({ id, title, details }) => (
            <Accordion key={id} title={title} details={details} />
          ))}
        </Box>
      </CustomContainer>
    </Box>
  );
};

FAQ.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
};

FAQ.defaultProps = {
  titlePart2: '',
  titlePart3: '',
  backgroundImage: '',
  heightImage: 0,
};
export default FAQ;
