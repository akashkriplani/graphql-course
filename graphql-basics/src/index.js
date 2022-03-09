import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    hello: String!
    name: String!
  }
`;

const resolvers = {
  Query: {
    hello() {
      return `This is my first query!`;
    },
    name() {
      return `Akash Kriplani`;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log('The server is up!');
});
