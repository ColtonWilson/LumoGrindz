const { Company } = require('../models');

const userData = [
  {
    name: 'Google',
    position_id: 1,
    // admin
    user_id: 2,
    is_in_queue: false,
  },
  {

    username: 'Apple',
    position_id: 2,
    // john Smith
    user_id: 1,
    is_in_queue: false,

  },
  {
    name: 'Samsung',
    position_id
  }


];

const seedUser = () => Company.bulkCreate(userData);

module.exports = seedUser;