import * as React from 'react';
import { Typography } from '@material-ui/core';
import {useSnackbar} from 'notistack';
import {useAuthenticationStyles} from './Register';
import { LoginForm } from '../components/login/LoginForm';
import { Meteor } from 'meteor/meteor';
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import PaddedPaper from "../components/PaddedPaper";

export const Login = props => {
  const { includeRegistration = true } = props;
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const classes = useAuthenticationStyles();
  const loginUser = React.useCallback((values, form) => {
    Meteor.loginWithPassword(values.email, values.password, err => {
      if(err) {
        form.setSubmitting(false);
        enqueueSnackbar(`Failed to login: ${err.message}`, { variant: "error" });
        return;
      }
      enqueueSnackbar("Logged in successfully!");
      history.push("/");
    });
  }, [])
  return(
    <Grid container className={classes.root} justify={"center"}>
      <Grid item className={classes.container}>
        <PaddedPaper>
          <Typography variant={"h2"}>Log In</Typography>
          <Typography variant={"h6"} paragraph>To your account!</Typography>
          <LoginForm submitHandler={loginUser} />
          {
            includeRegistration && <Typography variant={"body1"}>
              Don't have an account yet? <Link to={"/register"}>Create one</Link> now!
            </Typography>
          }
        </PaddedPaper>
      </Grid>
    </Grid>
  )
}
