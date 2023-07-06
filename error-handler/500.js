'use strict';

const handleError = (err, req, res, next) => {
  const error = err.message ? err.message : err;

  const errorObject = {
    status: 500,
    message: error,
  };
  res.status.json(errorObject);
};

module.exports = handleError;