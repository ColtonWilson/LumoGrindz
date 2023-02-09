const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Position extends Model {}

Position.init(
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
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true,
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
        company_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'company',
                key: 'id',
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
    modelName: 'position',
    }
);

module.exports = Position;