import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { primary, secondary } from './colors';
import { typography } from './typography';

const theme = createMuiTheme({
  typography,
  palette: {
    primary,
    secondary,
  },
});
export default responsiveFontSizes(theme);
