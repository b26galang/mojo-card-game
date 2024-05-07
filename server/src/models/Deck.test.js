const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('../models/index');
const db = require('../db/config')

// define in global scope
let deck;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'deck1', xp: 20 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  it('has correct properties assigned', async () => {
    expect(deck.name).toBe('deck1');
    expect(deck.xp).toBe(20);
  })

  // add tests for associations

})
