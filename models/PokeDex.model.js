'use strict';

const pokeDex = (dbConnection, DataTypes) => {
  return dbConnection.define('your-Pokemon', {
  });
};
// // can you tell I did A deep dive into hooks
// pokeDex.addHook('beforeCreate', async (pokeDex) => {
// // grabs the trainers Id and assigns it to the TrainersPokemon model
//   const {trainerId} = pokeDex;
//   // looks for the count of pokemon associated to a trainer
//   const pokemonCount = await pokeDex.count({where: {trainerId}});
//   const message = 'A trainer can only have a maximum of 6 Pokemon';
//   // if the count exceeds 6 pokemon it will throw the message
//   if(pokemonCount >= 6){
//     throw new Error(message);
//   }

// });

module.exports = pokeDex;