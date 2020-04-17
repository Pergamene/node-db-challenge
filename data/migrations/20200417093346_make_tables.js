exports.up = function(knex) {
  return knex.schema
    // projects
    .createTable('Projects', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable().unique().index();
      tbl.text('description');
      tbl.boolean('completed').defaultTo(0);
    })

    // tasks
    .createTable('Tasks', tbl => {
      tbl.increments('id');
      tbl.integer('project_id').notNullable().references('id').inTable('Projects').index();
      tbl.text('description').notNullable();
      tbl.text('notes');
      tbl.boolean('completed').defaultTo(0);
    })
    
    // resources
    .createTable('Resources', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable().unique().index();
      tbl.text('description');
    })

    // resource details
    .createTable('ResourceDetails', tbl => {
      tbl.increments('id');
      tbl.integer('project_id').notNullable().references('id').inTable('Projects').index();
      tbl.integer('resource_id').notNullable().references('id').inTable('Resources').index();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Projects')
    .dropTableIfExists('Tasks')
    .dropTableIfExists('Resources')
    .dropTableIfExists('ResourceDetails');
};
