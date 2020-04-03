import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AppsIcon from '@material-ui/icons/Apps';

export default ({ onClick }) => {
  return(
    <IconButton color={"inherit"} onClick={onClick}>
      <AppsIcon />
    </IconButton>
  )
}