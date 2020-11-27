import { makeStyles, Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import ApplicationType from './ApplicationType';
import styles from '../assets/styles/SectionApplicationTypes';

const useStyles = makeStyles(styles);

const SectionApplicationTypes = ({ sectionTitle, typesApplication, image }) => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.mainSection}>
      <Container fixed className={classes.container}>
        <Box className={classes.detailsContent}>
          <ApplicationType
            sectionTitle={sectionTitle}
            typesApplication={typesApplication}
          />
        </Box>
        <Box className={classes.containerImage}>
          <Box component="figure" className={classes.image}>
            <Image quality={100} priority src={image} layout="fill" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

SectionApplicationTypes.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  typesApplication: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};

export default SectionApplicationTypes;
