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
    {
    username: 'kevin',
    email: 'kevin@test.com',
    password: '123456k',
    is_admin: true,
  },


];

//Good to keep in mind to use saved passwords
const seedUser = async () => {
  for(let i=0; i < userData.length; i++)
  {
    await User.create(userData[i]);
  }
}


//User.bulkCreate(userData);

module.exports = seedUser;