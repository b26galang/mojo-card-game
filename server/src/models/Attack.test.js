const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('../models/index');
const db = require('../db/config')

// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ title: 'attack1', mojoCost: 50, staminaCost: 100 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

  it('has correct properties assigned', async () => {
    expect(attack.title).toBe('attack1');
    expect(attack.mojoCost).toBe(50);
    expect(attack.staminaCost).toBe(100);
  })

  // add tests for associations
  
})

