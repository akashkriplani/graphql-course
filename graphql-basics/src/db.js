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
    author: '1',
    post: '101'
  },
  {
    id: '1002',
    text: `Covers Sachin's story in a concise and impactful manner.`,
    author: '3',
    post: '301'
  },
  {
    id: '1003',
    text: 'Second part is more engrossing and an improvement over the first one.',
    author: '1',
    post: '102'
  },
  {
    id: '1004',
    text: 'There is a TV show based on this book! I am going to watch that as well.',
    author: '2',
    post: '201'
  }
];

const db = { users, posts, comments };

export { db as default };
