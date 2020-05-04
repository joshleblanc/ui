import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Root} from "./base/Root";
import {Providers} from "./Providers";

export const Boilerplate = ({ basename, children }) => (
  <Providers>
    <BrowserRouter basename={basename}>
      <CssBaseline/>
      <Switch>
        <Route>
          <Root>
            {children}
          </Root>
        </Route>
      </Switch>
    </BrowserRouter>
  </Providers>
);