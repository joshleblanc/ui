import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import primaryLight from "@material-ui/core/colors/green";
import primaryDark from "@material-ui/core/colors/teal";
import secondary from "@material-ui/core/colors/red";
import error from "@material-ui/core/colors/pink";

export default function getTheme(theme) {
  return createMuiTheme({
    palette: {
      type: theme,
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      }
    },
  });
};
