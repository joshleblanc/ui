import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {drawerWidth} from '../lib/constants';
import {useState} from '../lib/state';
import {makeStyles} from '@material-ui/styles';
import { Toolbar } from './base/Toolbar';
import { useTracker } from 'meteor/react-meteor-data';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default props => {
  const classes = useStyles();
  const { container, children } = props;
  const state = useState();
  const { drawerOpen, closeDrawer, theme } = useTracker(() => ({
    drawerOpen: state.drawerOpen,
    closeDrawer: state.closeDrawer,
    theme: state.theme
  }));
  return(
    <nav className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={drawerOpen}
          onClose={closeDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">

        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <Toolbar />
          {children}
        </Drawer>
      </Hidden>
    </nav>
  )
}
