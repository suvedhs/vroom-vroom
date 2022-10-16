import ReactDom from 'react-dom';
import App from './App'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://guarded-cove-87598.herokuapp.com/',
    cache: new InMemoryCache(),
});

// const client = ...

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDom.render(<App/>, document.querySelector('#root'))