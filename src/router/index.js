import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import App from '../pages';
import Game from '../pages/game';
import User from '../pages/user';


const BasicRoute = () => (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/user" component={User} />
      </Switch>
    </HashRouter>
);


export default BasicRoute;
