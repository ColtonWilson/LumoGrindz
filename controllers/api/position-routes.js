// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// const Category = require('./Category');

// Initialize Company model (table) by extending off Sequelize's Model class
class Company extends Model {}

// set up fields and rules for Company model
Company.init(
{
    id: {
        type: 
    }
}
)