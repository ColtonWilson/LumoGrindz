const { User } = require('../models');

const userData = [
  {
    username: 'John Smith',
    email: 'john@test.com',
    password: 'password',
  },
  {
    username: 'admin',
    email: 'admin@test.com',
    password: '123456',
    is_admin: true,
  },


];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;