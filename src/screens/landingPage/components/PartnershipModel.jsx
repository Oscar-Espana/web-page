import { makeStyles, Box, Button, Typography, Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/PartnershipModel';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CardPartnership from '#Components/CardPartnership';

const useStyles = makeStyles(styles);

const PartnershipModel = ({
  title,
  description,
  image,
  backgroundImage,
  heightImage,
  partnershipModel,
}) => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative" className={classes.section}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box component="article" className={classes.content}>
          <Box component="figure" className={classes.image}>
            <Image src={image} layout="fill" />
          </Box>
          <Subtitle
            head={title}
            component="h2"
            variant="h2"
            mb={0}
            align="center"
          />
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
          <Link href="mailto: info@initgrammers.com" target="_blank">
            <Button variant="contained" color="primary">
              ESCRÍBENOS
            </Button>
          </Link>

          <Box className={classes.services}>
            {partnershipModel.map((service) => (
              <Box key={service.title} className={classes.modelPartnership}>
                <CardPartnership
                  image={service.path}
                  title={service.title}
                  description={service.description}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

PartnershipModel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  partnershipModel: PropTypes.array.isRequired,
};

PartnershipModel.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};
export default PartnershipModel;
