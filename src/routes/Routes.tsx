import React from "react";
import {
    Route,
    HashRouter,
    Redirect
} from "react-router-dom";
import WordCounter from '../screens/wordcounter/WordCounter';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';

export const Authentication = () => {
    return (<Route path="/login" component={Login} />);
}

export default function MainRoutes() {
    return (
        <HashRouter>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/expense" component={WordCounter} />
        </HashRouter>
    );
}