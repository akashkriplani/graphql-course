const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((post) => {
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
  comments(parent, args, { db }, info) {
    return db.comments;
  }
};

export { Query as default };
