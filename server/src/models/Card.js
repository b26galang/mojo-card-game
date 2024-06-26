// import DataTypes from sequelize
const sequelize = require('../db/config');
const { DataTypes } = require('sequelize');

// use the define method to create our model(table)
const Card = sequelize.define('card', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    mojo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stamina: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Card;