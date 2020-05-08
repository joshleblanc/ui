import React from 'react';
import { Meteor } from 'meteor/meteor';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useUser } from '../hooks/useUser';

export default () => {
  const user = useUser();
  const logout = React.useCallback(() => {
    Meteor.logout();
  }, []);
  if(user) {
    return <Button color="inherit" onClick={logout}>Logout</Button>
  } else if(Meteor.isClient && Meteor.loggingIn()) {
    return <LinearProgress />
  } else {
    return <Button color="inherit" component={Link} to="/login">Login</Button>
  }
}
