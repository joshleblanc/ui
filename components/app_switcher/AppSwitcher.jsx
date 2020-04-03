import React from "react";
import AppSwitcherButton from "./AppSwitcherButton";
import Toolbar from "@material-ui/core/Toolbar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { app } from '../../lib/crayon';
import ListItemText from "@material-ui/core/ListItemText";
import SantaIcon from "../icons/SantaIcon";
import GamesIcon from '@material-ui/icons/Games';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const apps = [
  { name: "Gnashblade", url: "/gnashblade", icon: AccountBalanceIcon },
  { name: "Famtime", url: "/famtime", icon: GamesIcon },
  { name: "Secret Santa", url: "/secret-santa", icon: SantaIcon }
]

export default class extends React.Component {
  state = {
    open: false
  }

  open = () => {
    this.setState({ open: true });
  }

  close = () => {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return(
      <>
        <AppSwitcherButton onClick={this.open} />
        <Dialog open={open} onClose={this.close}>
          <DialogTitle>Apps</DialogTitle>
          <DialogContent>
            <List>
              {
                apps.filter(a => !window.location.pathname.startsWith(a.url)).map(a => (
                  <ListItem button key={a.name} onClick={() => app.navigate(a.url)}>
                    <ListItemAvatar>
                      {a.icon && <a.icon />}
                    </ListItemAvatar>
                    <ListItemText primary={a.name} />
                  </ListItem>
                ))
              }
            </List>
          </DialogContent>
        </Dialog>
      </>
    )
  }
}