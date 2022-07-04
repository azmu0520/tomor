import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Cards, Wrap } from './style';
import img from '../../assets/img/img1.png';
class Women extends Component {
  componentDidMount() {
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
      {
        categories{
          name
          products {
            id
            name
            inStock
            gallery 
            description
            category
            attributes {
              id
              name
              type
              items {
                displayValue
                value
                id
              }
            }
            prices {
              currency {
                 label
                 symbol
              }
              amount 
            }
            brand
          }
        } 
      }
    `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.props.dispatch({
          type: 'setData',
          payload: res?.data?.categories,
        });
      });
  }
  render() {
    console.log(this.props?.data);
    return (
      <Wrap>
        {this.props?.data ? (
          <>
            <Wrap.Title>Category name</Wrap.Title>
            <Cards>
              {this.props?.data[0]?.products.map((item) => (
                <Cards.Each key={item?.id} opacity={item?.inStock}>
                  <Cards.Img src={item?.gallery[0]} />
                  <Cards.Title>{item?.name}</Cards.Title>
                  <Cards.Price>{item?.prices[0]?.amount}</Cards.Price>
                  <Wrap.Cart>
                    <Cards.Icon />
                  </Wrap.Cart>
                  <Cards.Stock has={item?.inStock}>OUT OF STOCK</Cards.Stock>
                </Cards.Each>
              ))}
            </Cards>
          </>
        ) : (
          <div>NO DATA</div>
        )}
      </Wrap>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Women);
