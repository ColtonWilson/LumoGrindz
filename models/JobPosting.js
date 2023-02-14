const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JobPosting extends Model {}

JobPosting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    position_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1,50]
    }
    },
    post_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    job_desc: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
        len: [8,5000]
    }
    },
    salary:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'jobposting',
  }
);

module.exports = JobPosting;