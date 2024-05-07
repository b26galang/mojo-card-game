const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('../models/index');
const db = require('../db/config')

// define in global scope
let deck;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await Deck.create({ name: 'deck1' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

// add more tests

})
