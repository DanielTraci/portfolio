import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    //background color
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#F8F8F8',
        },
      },
    },
  },

  //colors
  palette: {
    primary: {
      //black
      main: "#1d1d1d"
    },
    
    secondary: {
      //white
      main: "#F8F8F8"
    },
    error: {
      //blue
      main: "#0053e1"
    },
  },

  typography: {
    h3: {
      fontSize: '1.9rem',
      '@media (min-width:600px)': {
        fontSize: '3.7rem',
      },
    },

  }




});

export default theme
