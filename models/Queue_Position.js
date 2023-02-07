const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Queue_Position extends Model {}

Queue_Position.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8,50]
        }
        },
        post_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        job_desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8,500]
        }
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
    modelName: 'queue_position',
    }
);

module.exports = Queue_Position;