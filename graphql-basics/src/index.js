import { GraphQLServer } from 'graphql-yoga';

// Scalar types - String, Boolean, Int, Float, ID

// Type definitions (Schema)
const typeDefs = `
  type Query {
    greeting(name: String, position: String): String!
    add(a: Float!, b: Float!): Float!
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      if (args.name && args.position) {
        return `Hello, ${args.name}! You are my favorite ${args.position}.`;
      } else {
        return 'Hello!';
      }
    },
    add(parents, args, ctx, info) {
      return args.a + args.b;
    },
    me() {
      return {
        id: '123098',
        name: 'Alice',
        email: 'alice@facegle.io',
        age: 28
      };
    },
    post() {
      return {
        id: '13469087',
        title: 'My first post',
        body: 'This is my first custom post',
        published: true
      };
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log('The server is up!');
});
