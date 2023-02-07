const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Queue_Company extends Model {}

Queue_Company.init(
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
            len: [8,50]
        }
        },
        position_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'queue_position',
                key: 'id',
            },
        },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'queue_company',
    }
);

module.exports = Queue_Company;