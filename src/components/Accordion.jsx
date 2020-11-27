import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { ExpandMoreIcon } from '#app/assets/icons';

const CustomAccordion = ({
  title,
  details,
  children,
  mt,
  mb,
  borderRadius,
}) => {
  const { palette } = useTheme();
  return (
    <Box
      mb={mb}
      mt={mt}
      width="100%"
      border={1}
      borderColor={palette.primary.main}
      borderRadius={borderRadius}
    >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <HelpOutlineIcon style={{ marginRight: 8 }} color="primary" />
          <Typography variant="body1">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">{details}</Typography>
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
CustomAccordion.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  children: PropTypes.node,
  mt: PropTypes.number,
  mb: PropTypes.number,
  borderRadius: PropTypes.number,
};
CustomAccordion.defaultProps = {
  title: '',
  details: '',
  children: null,
  mt: 0,
  mb: 4,
  borderRadius: 3,
};
export default CustomAccordion;
