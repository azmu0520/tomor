import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import All from '../components/All';
import Navbar from '../components/Navbar';
import { data } from '../utilits/navbar';
import Generic from '../components/Generic';

export default class Root extends Component {
  render() {
    return (
      <Routes>
        <Route element={<Navbar />}>
          {data?.map(({ id, path, Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
          <Route path='/' element={<All />} />
          <Route path='/pdp' element={<Generic />} />
        </Route>
        <Route path={'*'} element={<div>you are lost</div>} />
      </Routes>
    );
  }
}
