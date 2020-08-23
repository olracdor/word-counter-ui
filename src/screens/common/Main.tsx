import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navigation from '../../navigation/Navigation';
import TextField from '@material-ui/core/TextField';
import {
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import Home from '../home/Home'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));
export default function Main() {
  const styles = useStyles();

  return (
    <HashRouter>
      <CssBaseline />
      <Container maxWidth="md">
        <Navigation title="Word Counter"/>
        <TextField
          id="standard-full-width"
          label="Search"
          style={{ margin: 8 }}
          placeholder="e.g. John Doe"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <div className="content">
            <Route exact path="/">
              <Redirect to="/home" /> 
            </Route>
            <Route path="/home" component={Home}/>
          </div>
      </Container>
      
    </HashRouter>
  );
}