// import DataTypes from sequelize
const sequelize = require('../db/config');
const { DataTypes } = require('sequelize');

// use the define method to create our model(table)
const Attack = sequelize.define('Attack', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    mojoCost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    staminaCost: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }
});

module.exports = Attack;