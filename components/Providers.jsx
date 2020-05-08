import {ThemeProvider} from "@material-ui/styles";
import getTheme from "../lib/theme";
import React from "react";
import {SnackbarProvider} from "notistack";
import {useState} from "../lib/state";
import { useTracker } from 'meteor/react-meteor-data';

export default props => {
  const { children } = props;
  const state = useState();
  const { theme } = useTracker(() => ({ theme: state.theme }));
  return(
    <ThemeProvider theme={getTheme(theme)}>
      <SnackbarProvider>
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  )

}
