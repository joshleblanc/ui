import {ThemeProvider} from "@material-ui/styles";
import getTheme from "../lib/theme";
import React from "react";
import {SnackbarProvider} from "notistack";
import {StateContext} from "../lib/state";
import { autorun } from 'meteor/cereal:reactive-render';

@autorun
export default class extends React.Component {
  static contextType = StateContext;

  render() {
    const { children } = this.props;
    const { theme } = this.context;
    console.log(theme);
    return(
      <ThemeProvider theme={getTheme(theme)}>
        <SnackbarProvider>
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    )
  }
}
