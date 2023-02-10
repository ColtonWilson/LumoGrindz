//Skeleton code from Module 14 lesson 20 /models/index.js
const User = require('./User');
const JobPosting = require('./JobPosting');

User.hasMany(JobPosting, {
  foreignKey: 'user_id',
});

JobPosting.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, JobPosting };
