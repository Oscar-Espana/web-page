import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import CardService from '#Components/CardService';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import { services } from '#constants/LandingPage';

const useStyles = makeStyles((theme) => ({
  services: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(2),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: `${theme.spacing(4)}px 0`,
  },
  title: {
    color: theme.palette.primary.light,
    textAlign: 'center',
  },
  itemService: {
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.between('sm', 'md')]: {
    services: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: theme.spacing(4),
    },
    itemService: {
      '&:nth-child(odd)': {
        marginRight: theme.spacing(9),
      },
      '&:nth-child(even)': {
        marginLeft: theme.spacing(9),
      },
      '&:last-child': {
        alignContent: 'center',
        margin: 0,
      },
    },
  },
  [theme.breakpoints.up('lg')]: {
    services: {
      flexDirection: 'row',
      paddingTop: theme.spacing(4),
    },
    itemService: {
      '&:nth-child(1n)': {
        marginBottom: theme.spacing(8),
      },
      '&:nth-child(1)': {
        marginLeft: 0,
        marginRight: `${theme.spacing(4.5)}px`,
      },
      '&:nth-child(2)': {
        marginLeft: `${theme.spacing(9)}px`,
        marginRight: `${theme.spacing(9)}px`,
      },
      '&:nth-child(3)': {
        marginLeft: 0,
        marginRight: `${theme.spacing(9)}px`,
      },

      '&:nth-child(4)': {
        marginRight: 0,
        marginLeft: `${theme.spacing(4.5)}px`,
      },
      '&:nth-child(5)': {
        marginRight: 0,
        marginLeft: 0,
      },
      '&:nth-child(6)': {
        margin: `0 ${theme.spacing(13)}px`,
      },
      '&:nth-child(7)': {
        marginRight: 0,
        marginLeft: 0,
      },
    },
  },
}));

const Services = () => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative">
      <BackgroundImage
        image="/assets/images/figures/landingPage/bloque3.png"
        height={665}
      />
      <CustomContainer>
        <Box className={classes.content}>
          <Typography variant="h2" className={classes.title}>
            Integramos diseño y desarrollo para entregar el mejor proyecto
          </Typography>
          <Box className={classes.services}>
            {services.map((service) => (
              <Box
                component="article"
                className={classes.itemService}
                key={service.service}
              >
                <CardService image={service.path} service={service.service} />
              </Box>
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Services;
