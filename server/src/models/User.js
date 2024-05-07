// create your User model here
const sequelize = require('../db/config');
const { DataTypes } = require('sequelize');

// use the define method to create our model(table)
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = User;