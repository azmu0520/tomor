import React, { Component } from 'react';
import { data } from '../../utilits/navbar';
import { Wrap } from './style';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
class Navbar extends Component {
  state = {
    active: '/all',
  };
  render() {
    // let { counter } = useSelector();
    console.log(this.state.active);
    return (
      <>
        <Wrap>
          <Wrap.Links>
            {data.map((item) => (
              <NavLink
                className={'link'}
                key={item.id}
                to={item.path}
                onClick={() => this.setState({ active: item.path })}
              >
                <Wrap.Link path={item.path === this.state.active}>
                  {item.title}
                </Wrap.Link>
              </NavLink>
            ))}
          </Wrap.Links>
          <NavLink to='/pdp'>
            <Wrap.Logo />
          </NavLink>
          <Wrap.Sale>
            <Wrap.Select>
              <Wrap.Option value='usd'>$</Wrap.Option>
              <Wrap.Option value='usd'>€</Wrap.Option>
              <Wrap.Option value='usd'>¥</Wrap.Option>
            </Wrap.Select>
            <Wrap.Cart />
          </Wrap.Sale>
        </Wrap>
        <Outlet />
      </>
    );
  }
}

export default Navbar;
