import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

// import { gql } from '@apollo/client';
// client.query(
//   {
//     query: gql`
//       query GetLocations{
//         locations{
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   }
// ).then((res) => console.log(res));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

