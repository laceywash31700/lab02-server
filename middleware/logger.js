'use strict';

module.exports = (req,res,next) => {
  console.log(`Hey I exist in the logger from: ${req.path}`);
  next();
};