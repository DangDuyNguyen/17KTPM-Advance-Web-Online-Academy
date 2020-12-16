import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Body from './Body';
import Header from './Header'

import './App.module.css'

import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from '../Utils/Common';

import axios from 'axios';


function App() {
const [authLoading, setAuthLoading] = useState(true);

useEffect(() => {
    const token = getToken();
    if (!token) {
    return;
    }

}, []);

if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
}
return (
<div className="App">
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Body} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
</div>
);
}

export default App;