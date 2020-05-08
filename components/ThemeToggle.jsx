import React from 'react';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useState} from "../lib/state";

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: '1rem'
  }
}));

export default function ThemeToggle() {
  const classes = useStyles();
  const { toggleTheme } = useState();
  return(
    <Button variant="text" color="inherit" onClick={toggleTheme} size="small" className={classes.button}>
      Toggle Theme
    </Button>
  )
}
