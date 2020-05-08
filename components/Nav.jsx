import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {drawerWidth} from '../lib/constants';
import {State, StateContext} from '../lib/state';
import {withStyles} from '@material-ui/styles';
import {autorun} from 'meteor/cereal:reactive-render';
import { Toolbar } from './base/Toolbar';

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
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
});

@withStyles(styles, {withTheme: true})
@autorun
export default class extends React.Component {
  static contextType = StateContext;
  render() {
    const { drawerOpen, closeDrawer } = this.context;
    const {container, classes, theme, children} = this.props;
    return (
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
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
        <Hidden xsDown implementation="css">

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
}
