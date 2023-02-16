//skeleton from Module 14 lesson 20 /seeds/index.js
const sequelize = require('../config/connection');
const seedUser = require('./user');
const seedJobPosition = require('./jobPosting');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedJobPosition();



  process.exit(0);
};

seedAll();
