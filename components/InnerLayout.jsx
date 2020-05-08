import React from 'react';
import Navbar from "./Navbar";
import Nav from "./Nav";
import {Content} from "./base/Content";
import {Boilerplate} from "./Boilerplate";

export const InnerLayout = ({ DrawerItems, Routes }) => (
  <>
    <Navbar/>
    <Nav><DrawerItems/></Nav>
    <Content>
      <Routes/>
    </Content>
  </>
)