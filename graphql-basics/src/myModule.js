const message = 'Something message from myModule.js';

const name = 'Akash';

const location = 'Lucknow';

const getGreeting = (name) => {
  return `Welcome to the course, ${name}`;
};

export { name, message, location as default, getGreeting };
