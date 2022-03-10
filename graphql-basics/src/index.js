import { GraphQLServer } from 'graphql-yoga';

const users = [
  {
    id: '1',
    name: 'Alice',
    email: 'alice@facegle.io',
    age: 31
  },
  {
    id: '2',
    name: 'Bob',
    email: 'bob@facegle.io'
  },
  {
    id: '3',
    name: 'Michelle',
    email: 'michelle@facegle.io'
  }
];

const posts = [
  {
    id: '1',
    title: `Harry Potter and the Philosopher's Stone`,
    body: 'Part 1 of the Harry Potter Saga series by J.K. Rowling.',
    published: true
  },
  {
    id: '2',
    title: `A Song of Ice and Fire`,
    body: 'A classic fiction written by George R.R. Martin.',
    published: true
  },
  {
    id: '3',
    title: `Playing it my way`,
    body: 'An autobiography of the God of Cricket - Sachin Tendulkar.',
    published: true
  }
];

// Scalar types - String, Boolean, Int, Float, ID

// Type definitions (Schema)
const typeDefs = `
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
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
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(args.query.toLowerCase()) ||
          post.body.toLowerCase().includes(args.query.toLowerCase())
        );
      });
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
