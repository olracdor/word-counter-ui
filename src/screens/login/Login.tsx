import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import logo from '../../assets/logo.svg';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Route } from "react-router-dom";
import {
  login,
  isAuthenticated
} from '../../slices/AuthenticationSlice';
import WordCounter from '../wordcounter/WordCounter';
const useStyles = makeStyles((theme) => ({
  
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#FEFEFE'
  },
}));

export default function Login() {
  const auth = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => {

  });
  var handleLogin = () =>  {
    
   dispatch(login({authenticated: true}));
   localStorage.setItem("auth", auth.toString());
  }
  if(auth){
    return (
      <Route
        render={props =>(
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <Typography component="h1" variant="h5" color="textSecondary">
          Welcome!
        </Typography>
        <form className={styles.form} noValidate>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
            onClick={() => handleLogin()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      <WordCounter/>
      </Box>
    </Container>
  );
}
