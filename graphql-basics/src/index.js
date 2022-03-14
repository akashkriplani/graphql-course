import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';
import User from './resolvers/User';
import Post from './resolvers/Post';
import Comment from './resolvers/Comment';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query: Query,
    Mutation: Mutation,
    Subscription: Subscription,
    User: User,
    Post: Post,
    Comment: Comment
  },
  context: {
    db: db,
    pubsub: pubsub
  }
});

server.start(() => {
  console.log('The server is up!');
});
