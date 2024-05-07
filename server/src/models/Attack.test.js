const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('../models/index');
const db = require('../db/config')

// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await Attack.create({ title: 'attack1' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

// add more tests

})

