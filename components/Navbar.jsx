import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { drawerWidth } from '../lib/constants';
import MenuIcon from '@material-ui/icons/Menu';
import {useState} from '../lib/state';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountButtons from './AccountButtons';
import AppSwitcher from "./app_switcher/AppSwitcher";
import ThemeToggle from "./ThemeToggle";
import {makeStyles} from "@material-ui/core/styles";
import { useTracker } from 'meteor/react-meteor-data';

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1
  }
}));

export default props => {
  const classes = useStyles();
  const state = useState();
  const { openDrawer } = useTracker(() => ({ openDrawer: state.openDrawer }));
  const { title } = props;
  return(
    <AppBar position={"fixed"} className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={openDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
        <div className={classes.grow} />
        <AppSwitcher />
        <AccountButtons />
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  )
}
