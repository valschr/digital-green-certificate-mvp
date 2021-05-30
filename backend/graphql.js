const { ApolloServer, gql } = require('apollo-server-lambda');
const getIdentityToken = require('./resolver/getIdentityToken')

require('dotenv').config()

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type IdentityToken {
        token: String,
    }

  type Query {
    getIdentityToken(uid: String): IdentityToken
  }
`


// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    getIdentityToken,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*', // TODO: Set Domain
    credentials: true,
  },
});