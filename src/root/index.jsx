import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import All from '../components/All';
import Navbar from '../components/Navbar';
import { data } from '../utilits/navbar';
import Generic from '../components/Generic';

class Root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {data?.map(({ id, path, Component }) => (
            <Route key={id} path={path} component={Component} />
          ))}
          <Route exact path='/' component={All} />
          <Route path='/pdp' component={Generic} />
          <Route path={'*'} component={Generic} />
        </Switch>
      </div>
    );
  }
}

export default Root;
