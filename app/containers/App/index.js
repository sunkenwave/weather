import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Header from 'components/Header';
import './app.scss';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
