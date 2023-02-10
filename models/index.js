//Skeleton code from Module 14 lesson 20 /models/index.js
const User = require('./User');
const Company = require('./Company');




User.belongsTo(Company, {
  foreignKey: 'company_id',
});

Company.hasMany(User, {
  foreignKey: 'company_id',
});




module.exports = { User, Company};