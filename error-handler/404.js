'use strict';

const handleNotFound = (req, res, next) => {
  const errorObject = {
    status:404,
    message: 'these are not the pages you are looking for'
  };
  res.status(404).json(errorObject);
};

module.exports = handleNotFound;