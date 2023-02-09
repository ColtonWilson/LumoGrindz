const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 50],
      },
    },
    is_in_queue: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'company',
  }
);

module.exports = Company;
