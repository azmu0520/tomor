import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    console.log(this.props);
    return <div>index</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Women);
