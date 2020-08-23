import React from 'react';
import './App.css';
import Login from './screens/login/Login'
import Main from './screens/common/Main'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SecuredRoute from './routes/SecuredRoute';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { store } from './store/Store';
const themes = createMuiTheme({
  palette: {
    primary: {
      main: '#764BBC',
    },
    secondary: {
      main: '#51aeed'
    }
  },
});

export default function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={themes}>
        <Router>
        
          <Route path="/login" exact component={Login} />
          <SecuredRoute
            path="/"
            exact
            component={Main}
          />
          
        </Router>
    </ThemeProvider>
    </Provider>)
}