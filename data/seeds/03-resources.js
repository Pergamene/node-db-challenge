exports.seed = function(knex) {
  return knex('Resources').del()
    .then(function () {
      return knex('Resources').insert([
        {name: 'r1', description: 'r1'},
        {name: 'r2', description: 'r2'},
        {name: 'r3'}
      ]);
    });
};
