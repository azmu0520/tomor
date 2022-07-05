import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Cards, Wrap } from './style';
import { useLocation } from 'react-router-dom';

class All extends Component {
  componentDidMount() {
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        {   
          category {
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
        console.log(res);
        this.props.dispatch({
          type: 'setData',
          payload: res?.data?.category?.products,
        });
      });
  }
  render() {
    return (
      <Wrap>
        {this.props?.data ? (
          <>
            <Wrap.Title>Category name</Wrap.Title>
            <Cards>
              {this.props?.data?.map((item) => (
                <Cards.Each key={item?.id} opacity={item?.inStock}>
                  <Cards.Img opacity={item?.inStock} src={item?.gallery[0]} />
                  <Cards.Title>{item?.name}</Cards.Title>
                  <Cards.Price>{item?.prices[0]?.amount}</Cards.Price>
                  <Wrap.Cart>
                    <Cards.Icon />
                  </Wrap.Cart>
                  <Cards.Stock opacity={item?.inStock}>
                    OUT OF STOCK
                  </Cards.Stock>
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

export default connect(mapStateToProps)(All);
