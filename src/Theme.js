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
      main: "#1A1A1A"
    },
    secondary: {
      main: "#F8F8F8"
    },
    error: {
      //red
      main: "#C01F24"
    },
  },


});

export default theme
