//Skeleton code from Module 14 lesson 20 /models/index.js
const User = require('./User');
const Company = require('./Company');
const Position = require('./Position');


User.hasMany(Position, {
  foreignKey: 'user_id',
});

Position.belongsTo(User, {
  foreignKey: 'user_id',
  
});

Company.hasMany(Position, {
  foreignKey: 'position_id',
  
});

Position.belongsTo(Company, {
  foreignKey: 'position_id',
  onDelete: "CASCADE"
});

Company.hasMany(User, {
  foreignKey: 'user_id',
});

User.belongsTo(Company, {
  foreignKey: 'user_id',
});



module.exports = { User, Company, Position};