import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import {logout} from '../slices/AuthenticationSlice';
import {NavLink} from "react-router-dom";
import { styleSheet } from './StyleSheet';
import { config } from '../config/Config';

export default function Navigation(props: any) {

  const dispatch = useDispatch();
  const classes = styleSheet();
  
  const { sections, title } = props;
  const navLinks = [
    { title: <HomeIcon/>, path: '/home' }
  ];
  var handleLogout= () =>  {
    
    dispatch(logout());
    localStorage.setItem("auth", "");
    return (<Redirect to='/'  />);
   }
  return (
    <React.Fragment>
      
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      
        {navLinks.map((link: any) => (
        
          <NavLink 
            className={classes.toolbarLink}
            activeStyle={{
              color: "#5FB3EC"
            }}
            to={link.path}>{link.title}</NavLink>
        ))}
        <NavLink to='/' className={classes.iconBtn} onClick={()=> handleLogout()}> <ExitToAppIcon /></NavLink>
       
        
      </Toolbar>
    </React.Fragment>
  );
}

Navigation.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};