import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
    cache: new InMemoryCache()
});

export default client;

