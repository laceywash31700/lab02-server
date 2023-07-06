'use strict';

const validator = (req,res,next) => {
  const message = 'Hey, I need a name friend';
  let err;
  if (!req.query.name){
    err =  new Error(message);
  }
  next(err);
};

module.exports = validator;