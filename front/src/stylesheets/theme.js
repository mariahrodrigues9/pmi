import { createMuiTheme } from '@material-ui/core/styles'

let theme = createMuiTheme({
  typography: {
    fontFamily: "'latoregular', 'Helvetica', 'Arial', sans-serif"
  },
  palette: {
    primary: { 
      light: '#b18365',
      main: '#986b4d',
      dark: '#855e43',
      contrastText: "rgba(255, 255, 255, 1)"
    },
    secondary: { 
      light: '#a4a4a4',
      main: '#2b2b2b',
      dark: '#171717',
      contrastText: "rgba(255, 255, 255, 1)"
    }
  },
  overrides: {}
});

theme.overrides = {
  MuiTypography: {
    headline: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: '1.1em',
      color: theme.palette.secondary.main,
      [theme.breakpoints.down('md')]: {
        fontSize: '2.25rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: theme.palette.secondary.light,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.125rem',
      },
    },
    body1: {
      fontSize: '0.9375rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
      },
    },
  },
  MuiButton: {
    root: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
      padding: '9px 25px',
      minHeight: '30px',
      borderRadius: '4px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.875rem',
      },
    },
    flatPrimary: {
      transition: '0.2s',
      '&:hover': {
        color: theme.palette.primary.light,
      }
    },
    raisedPrimary: {
      boxShadow: 'none',
    },
    raisedSecondary: {
      boxShadow: 'none',
      borderColor: '#991417',
      backgroundColor: '#991417',
      '&:hover': {
        borderColor: '#881517',
        backgroundColor: '#881517',
      }
    },
    mini: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      '&:hover, &:focus': {
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }
    },
  },
  MuiFormControl: {
    marginNormal: {
      marginTop: '12px',
      marginBottom: '0'
    }
  },
  MuiFormLabel: {
    root: {
      fontSize: '0.875rem'
    }
  },
  MuiInput: {
    root: {
      fontSize: '0.875rem'
    }
  },
  MuiSelect: {
    select: {
      '&:focus' : {
        backgroundColor: 'transparent',
      }
    }
  },
}

export default theme