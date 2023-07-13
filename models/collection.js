'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  create(jsonObj) {
    return this.model
      .create(jsonObj)
      .then((record) => record)
      .catch((error) => {
        console.error(`Error when reading data for model: ${this.model.name}`);
        throw error;
      });
  }

  get(id, option = {}) {
    
    let options = {};
    options.where = { id };

    return id
      ? this.model
        .findOne(options)
        .then((records) => {
          return records;
        })
        .catch((error) => {
          console.error(
            `Error when reading data for model: ${this.model.name}`
          );
          throw error;
        })
      : this.model
        .findAll(option)
        .then((records) => {
          return records;
        })
        .catch((error) => {
          console.error(
            `Error when reading data for model: ${this.model.name}`
          );
          throw error;
        });
  }

  update(id, jsonObj) {
    return !id
      ? Promise.reject( new Error(`No ID provided for the Model: ${this.model.name}`))
      : this.model
        .findOne({ where: { id } })
        .then((record) => record.update(jsonObj))
        .then((updatedRecord) => updatedRecord)
        .catch((error) => {
          console.error(`error when updating model: ${this.model.name}`);
          return error;
        });
  }

  delete(id){
    return !id
      ? Promise.reject( new Error(`No ID provided for the Model: ${this.model.name}`))
      : this.model.destroy({where: {id} })
        .then(deletedRecord => deletedRecord)
        .catch(error => {
          console.error(`error when deleting model: ${this.model.name}`);
          return error;
        });
  }

}

module.exports = Collection;
