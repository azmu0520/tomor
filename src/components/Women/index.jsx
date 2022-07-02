import React, { Component } from 'react';

export default class Women extends Component {
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
    }).then((res) => {});
  }

  render() {
    const { user, setUser } = this.context;
    console.log(user, 'o');
    return <div>index</div>;
  }
}

// import React, { useEffect } from 'react';
// import { useQuery } from 'react-query';
// export default function Women() {
//   const endpoint = 'http://localhost:4000/';
//   const FILMS_QUERY = `
//   {
//     categories{
//       name
//       products {
//         id
//         name
//         inStock
//         gallery
//         description
//         category
//         attributes {
//           id
//           name
//           type
//           items {
//             displayValue
//             value
//             id
//           }
//         }
//         prices {
//           currency {
//              label
//              symbol
//           }
//           amount
//         }
//         brand
//       }
//     }
//   }
// `;
//   useEffect(() => {
//     fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query: FILMS_QUERY }),
//     }).then((res) => console.log(res));
//   }, []);
//   return <div>Women</div>;
// }
