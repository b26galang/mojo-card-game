// import DataTypes from sequelize
const sequelize = require('../db/config');
const { DataTypes } = require('sequelize');

// use the define method to create our model(table)
const Deck = sequelize.define('Deck', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    xp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Deck;