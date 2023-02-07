//Skeleton code from Module 14 lesson 20 /models/index.js
const User = require('./User');
const Company = require('./Company');
const Position = require('./Position');
const Queue_Company = require('./Queue_Company');
const Queue_Position = require('./Queue_Position');

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

//index.js queued models
User.hasMany(Queue_Position, {
  foreignKey: 'user_id',
});

Queue_Position.belongsTo(User, {
  foreignKey: 'user_id',
});

Queue_Company.hasMany(Queue_Position, {
  foreignKey: 'position_id',
});

Queue_Position.belongsTo(Queue_Company, {
  foreignKey: 'position_id',
  onDelete: "CASCADE"
});

Queue_Company.hasMany(User, {
  foreignKey: 'user_id',
});

User.belongsTo(Queue_Company, {
  foreignKey: 'user_id',
});

module.exports = { User, Company, Position, Queue_Company, Queue_Position };