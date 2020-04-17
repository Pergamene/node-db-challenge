exports.seed = function(knex) {
  return knex('Projects').del()
    .then(function () {
      return knex('Projects').insert([
        {name: 'p1', description: 'd1', completed: true},
        {name: 'p2', description: 'd2'},
        {name: 'p3', completed: false},
      ]);
    });
};
