import ApolloClinet from "apollo-boost";

const client = new ApolloClinet({
    uri: "http://localhost:4000/"
});

export default client;