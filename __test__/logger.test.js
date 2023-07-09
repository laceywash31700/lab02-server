'use strict';
const logger = require('../middleware/logger');

describe('tests the logger middleware', () => {
  
  let consoleSpy;
  let req = {path: '/test'};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('properly logs some output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith(
      `Hey I exist in the logger from: ${req.path}`
    );
  });

  test('the next function gets called', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

});
