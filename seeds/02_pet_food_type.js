/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'meowmix', description: 'cat food'},
    {id: 2, name: 'kibble', description: 'dog food'},
    {id: 3, name: 'bird seed', description: 'seeds for da birds'},
    {id: 4, name: 'fish flakes', description: "a fish's favorite snack"}

  ]);
};
