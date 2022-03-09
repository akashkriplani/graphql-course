import { GraphQLServer } from 'graphql-yoga';

// Type definitions (Schema)
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return `This is my first query!`;
    },
    name() {
      return `Akash Kriplani`;
    },
    location() {
      return `Lucknow`;
    },
    bio() {
      return `Experience full stack web developer`;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log('The server is up!');
});
