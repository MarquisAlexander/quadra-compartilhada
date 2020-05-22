
exports.up = function(knex) {
  return knex.schema.createTable('users_quadra', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_quadra')
};
