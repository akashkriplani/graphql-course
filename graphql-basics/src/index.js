import { GraphQLServer } from 'graphql-yoga';

const users = [
  {
    id: '1',
    name: 'J.K. Rowling',
    email: 'joanne@facegle.io',
    age: 31
  },
  {
    id: '2',
    name: 'George R.R. Martin',
    email: 'george@facegle.io'
  },
  {
    id: '3',
    name: 'Sachin Tendulkar',
    email: 'sachin@facegle.io'
  }
];

const posts = [
  {
    id: '101',
    title: `Harry Potter and the Philosopher's Stone`,
    body: 'Part 1 of the Harry Potter Saga by J.K. Rowling.',
    published: true,
    author: '1'
  },
  {
    id: '102',
    title: `Harry Potter and the Chamber of Secrets`,
    body: 'Part 2 of the Harry Potter Saga by J.K. Rowling.',
    published: true,
    author: '1'
  },
  {
    id: '201',
    title: `A Song of Ice and Fire`,
    body: 'A classic fiction written by George R.R. Martin.',
    published: true,
    author: '2'
  },
  {
    id: '301',
    title: `Playing it my way`,
    body: 'An autobiography of the God of Cricket - Sachin Tendulkar.',
    published: true,
    author: '3'
  }
];

const comments = [
  {
    id: '1001',
    text: 'What a fantastic read! Indeed a classic!',
    author: '1'
  },
  {
    id: '1002',
    text: `Covers Sachin's story in a concise and impactful manner.`,
    author: '3'
  },
  {
    id: '1003',
    text: 'Second part is more engrossing and an improvement over the first one.',
    author: '1'
  },
  {
    id: '1004',
    text: 'There is a TV show based on this book! I am going to watch that as well.',
    author: '2'
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
    comments: [Comment!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
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
    },
    comments(parent, args, ctx, info) {
      return comments;
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => post.author === parent.id);
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.author === parent.id);
    }
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log('The server is up!');
});
