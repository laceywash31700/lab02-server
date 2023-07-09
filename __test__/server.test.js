'use strict';

const supertest = require('supertest');
const { app } = require('../src/server.js');
const request = supertest(app);
const {dbConnection} = require('../models/index.js');
const pokemon = require('../routes/pokemon.route');

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
    
    const pokemon = {
      name : 'Unown',
      type: 'Psychic',
      abilities : 'Levitate',
      isLegendary: false
    };

    const response = await request.post('/pokemon').send(pokemon);
    expect(response.status).toBe(200);

  
    expect(response.body.id).toBeDefined();

  
    Object.keys(pokemon).forEach((key) => {
      expect(pokemon[key]).toEqual(response.body[key]);
    });
  });

  test('request to /wat-up-internet works with params', async () =>{
    const response = await request.get('/wat-up-internet/Josh');
    expect(response.text).toBe(`Hey! Hey! Hey!, Josh Welcome to the internet`);
  });


});


