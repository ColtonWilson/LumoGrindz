const { Company } = require('../models');

const userData = [
  {
    name: 'Google',
    // admin
    is_in_queue: false,
  },
  {

    name: 'Apple',
    // john Smith
    is_in_queue: false,

  },





];

const seedUser = () => Company.bulkCreate(userData);

module.exports = seedUser;