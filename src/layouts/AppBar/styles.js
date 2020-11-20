const styles = (theme) => ({

  root: {
    flexGrow: 1,
  },
  main: {
    background: theme.palette.primary.contrastText,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    [theme.breakpoints.up('lg')]: {
      filter: 'drop-shadow(9px 9px 16px rgba(0, 0, 0, 0.25)); color: black',
    },
    color: theme.palette.common.black,
  },
  logo: {
    marginRigh: theme.spacing(2),
  },
  sectionLogo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'star',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
    color: theme.palette.primary.main,
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(1),
    textTransform: 'capitalize',
  },
  advisory: {
    display: 'flex',
    alignItems: 'center',
  },
  selected: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  logoMovil: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default styles;
