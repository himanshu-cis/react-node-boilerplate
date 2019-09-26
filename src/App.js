import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { routes } from './route'
import { BrowserRouter as Router } from 'react-router-dom'
import ResolveLayout from './layouts/index.layout';

function App({users}) {
  return <Router>
    {routes.map((route, path) => <ResolveLayout route={route} path={path} users={users} />)}
  </Router>
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}

export default connect(mapStateToProps)(App);; 
