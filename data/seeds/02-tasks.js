exports.seed = function(knex) {
  return knex('Tasks').del()
    .then(function () {
      return knex('Tasks').insert([
        {description: 'p1 t1', notes: 'p1 t1 n', completed: true, project_id: 1},
        {description: 'p1 t2', completed: false, project_id: 1},
        {description: 'p2 t1', notes: 'p2 t1 n', project_id: 2},
        {description: 'p2 t2', notes: 'p2 t2 n', completed: true, project_id: 2},
        {description: 'p2 t3', notes: 'p2 t3 n', completed: true, project_id: 2},
        {description: 'p3 t1', notes: 'p3 t1 n', completed: true, project_id: 3},
      ]);
    });
};
