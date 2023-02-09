const { Company } = require('../models');

const userData = [
  {
    name: 'Google',
    // admin
    user_id: 2,
    is_in_queue: false,
  },
  {

    name: 'Apple',
    // john Smith
    user_id: 1,
    is_in_queue: false,

  },



];

const seedUser = () => Company.bulkCreate(userData);

module.exports = seedUser;