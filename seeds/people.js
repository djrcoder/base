const people = require("../data/allPeople")
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert(people);
    });
};
