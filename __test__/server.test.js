'use strict';

const {dbConnection} = require('../models/index.js');
const Pokemon = require('../models/pokemon.model.js');
const { app } = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(app);

let trainer = {
  name : 'Ash Ketchum',
  homeTown: 'Pallet Town',
  badges : {
    boulder: true,
    cascade: true,
    thunder: true,
    rainbow: true,
    soul: true,
    marsh: true,
    volcano: true,
    earth: true
  }
};

let pokemon = {
  name : 'Unown',
  type: 'Psychic',
  abilities : 'Levitate',
  isLegendary: false
};

describe('testing if all routes for this server are functioning properly', () => {
  
  beforeAll(async () => {
    await dbConnection.sync();
  });
  afterAll(async () => {
    await dbConnection.drop();
  });
  
  it('should respond with a 404 on an invalid route', () => {
    return request.get('/foobar').then( results => {
      expect(results.status).toBe(404);
    });
  });

  it('should respond with a 404 on an invalid method', () =>{
    return request.put('/foobar').then(results => {
      expect(results.status).toBe(404);
    });
  });


  it('can create a record for Pokemon', async () => {
    const response = await request.post('/pokemon').send(pokemon);
    expect(response.status).toBe(200);
    expect(response.body.id).toBeDefined();
    Object.keys(pokemon).forEach((key) => {
      expect(pokemon[key]).toEqual(response.body[key]);
    });
  });

  it('can create a trainer record', async () => {
    const response = await request.post('/trainers').send(trainer);
    expect(response.status).toBe(200);
    expect(response.body.id).toBeDefined();
    Object.keys(trainer).forEach((key) => {
      expect(trainer[key]).toEqual(response.body[key]);
    });
  });

  it('can read pokemon routes', async () => {
    const response = await request.get('/pokemon');
    expect(response.status).toBe(200);
    Object.keys(pokemon).forEach(key => {
      expect(pokemon.key).toEqual(response.body.key);
    });
  });

  it('can read trainers routes', async () => {
    const response = await request.get('/trainers');
    expect(response.status).toBe(200);
    Object.keys(trainer).forEach(key => {
      expect(trainer.key).toEqual(response.body.key);
    });
  });

  xit('can update pokemon', async () => {
    pokemon.isLegendary = true;
    const response = await request.put('/pokemon/1', pokemon);
    expect(response.body.isLegendary).toBe(true);
  });

  test('request to /wat-up-internet works with params', async () =>{
    const response = await request.get('/wat-up-internet/Josh');
    expect(response.text).toBe(`Hey! Hey! Hey!, Josh Welcome to the internet`);
  });

});


