const { User } = require('../models');

const userData = [
  {
    username: 'John Smith',
    email: 'john@test.com',
    password: 'password',
  },
  {
    username: 'tester',
    email: 'test@test.com',
    password: '123456',

  },


];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;