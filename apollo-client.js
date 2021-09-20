import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.kirasportswear.com/public/graphql",
  cache: new InMemoryCache(),
});

export default client;
