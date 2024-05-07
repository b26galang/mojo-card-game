const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('../models/index');
const db = require('../db/config')

// define in global scope
let card;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'card1', mojo: 10, stamina: 20, imgUrl: 'newImg' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  it('has correct properties assigned', async () => {
    expect(card.name).toBe('card1');
    expect(card.mojo).toBe(10);
    expect(card.stamina).toBe(20);
    expect(card.imgUrl).toBe('newImg');
  })

  // add tests for associations
  
})
