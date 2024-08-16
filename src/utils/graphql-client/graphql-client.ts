import { ApolloClient, InMemoryCache } from '@apollo/client';

export const graphqlClient = new ApolloClient({
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
    },
    uri: process.env.CMS_ENDPOINT,
});
