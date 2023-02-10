//skeleton from Module 14 lesson 20 /seeds/index.js
const sequelize = require('../config/connection');
const seedUser = require('./user');
const seedCompany = require('./company');
//const seedPosition = require('./position');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCompany();

  await seedUser();

 

  //await seedPosition();

  

  process.exit(0);
};

seedAll();