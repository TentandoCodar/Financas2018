import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './pages/Login/index';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Launchs from './pages/Launchs';
export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/Dashboard" component={Dashboard}></Route>
            <Route exact path="/Categories" component={Categories}></Route>
            <Route exact path="/Launchs" component={Launchs}></Route>
        </Switch>
    );
}