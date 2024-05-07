const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('../models/index');
const db = require('../db/config')

// define in global scope
let card;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await Card.create({ name: 'card1' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

// add more tests

})
