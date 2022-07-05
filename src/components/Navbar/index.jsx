import React, { Component } from 'react';
import { data } from '../../utilits/navbar';
import { Wrap } from './style';
import { Link, withRouter } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <>
        <Wrap>
          <Wrap.Links>
            {data.map((item) => (
              <Link className={'link'} key={item.id} to={item.path}>
                <Wrap.Link path={item?.path === this.props?.location?.pathname}>
                  {item.title}
                </Wrap.Link>
              </Link>
            ))}
          </Wrap.Links>
          <Link to='/pdp'>
            <Wrap.Logo />
          </Link>
          <Wrap.Sale>
            <Wrap.Select>
              <Wrap.Option value='usd'>$</Wrap.Option>
              <Wrap.Option value='usd'>€</Wrap.Option>
              <Wrap.Option value='usd'>¥</Wrap.Option>
            </Wrap.Select>
            <Wrap.Cart />
          </Wrap.Sale>
        </Wrap>
      </>
    );
  }
}

export default withRouter(Navbar);
