import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Collections from './Collections';
import Home from './Home'
import ViewCollection from './ViewCollection';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/collections">
          <Collections />
        </Route>
        <Route exact path="/viewcollection/:id/details">
          <ViewCollection />
        </Route>
      </Switch>
    </Router>
  );
}