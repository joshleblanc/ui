import React from 'react';
import {Boilerplate} from "./Boilerplate";
import {InnerLayout} from "./InnerLayout";

export default props => {
  const {basename, Routes, DrawerItems} = props;
  return (
    <Boilerplate basename={basename}>
      <InnerLayout Routes={Routes} DrawerItems={DrawerItems} />
    </Boilerplate>
  )
};
