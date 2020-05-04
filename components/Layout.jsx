import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Content} from "./base/Content";
import Navbar from "./Navbar";
import Nav from "./Nav";
import {Providers} from "./Providers";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Root} from "./base/Root";
import { Switch } from 'react-router-dom';
import {Boilerplate} from "./Boilerplate";

export default props => {
  const {basename, Routes, DrawerItems} = props;
  return (
    <Boilerplate basename={basename}>
      <Navbar/>
      <Nav><DrawerItems/></Nav>
      <Content>
        <Routes/>
      </Content>
    </Boilerplate>

)
};
