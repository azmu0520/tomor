import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import All from '../components/All';
import Navbar from '../components/Navbar';
import { data } from '../utilits/navbar';
import Generic from '../components/Generic';
import Pdp from '../components/Generic/Pdp';

class Root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {data?.map(({ id, path, Component }) => (
            <Route key={id} path={path} component={Component} />
          ))}
          <Switch>
            {data?.map(({ id, path }) => (
              <Route key={id} path={`${path}/id`} component={Pdp} />
            ))}
          </Switch>
          <Route exact path='/' component={All} />
          <Route path='/pdp' component={Generic} />
          <Route path={'*'}>
            <div>you are lost</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Root;
