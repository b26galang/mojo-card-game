const { User } = require('./User');
const { Attack } = require('./Attack');
const { Deck } = require('./Deck');
const { Card } = require('./Card'); 
// import the rest of your models above

// set up the associations here

// each User may create exactly one Deck / one-to-one 
User.hasOne(Deck);
Deck.belongsTo(User)

// each Deck may contain many Cards and a Card can only belong to one Deck / one-to-many
Deck.hasMany(Card);
Card.belongsTo(Deck);

// each Card may have many Attacks and each attack may belong to many Cards / many-to-many
Card.hasMany(Attack);
Card.belongstoMany(Attack, { through: 'CardAttacks' })
Attack.belongsToMany(Card, { through: 'CardAttacks' });

// and then export them all below
module.exports = { Attack, Card, Deck, User };
