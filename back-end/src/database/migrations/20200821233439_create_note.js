exports.up = function (knex) {
  return knex.schema.createTable('notes', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('note').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
