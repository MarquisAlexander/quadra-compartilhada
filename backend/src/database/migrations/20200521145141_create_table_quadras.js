
exports.up = function(knex) {
  return knex.schema.createTable('quadras', function(table){
      table.increments();

      table.string('name_quadra').notNullable();
      table.string('dias_disponiveis').notNullable();
      table.string('horario').notNullable();
      table.string('modelidade').notNullable();
      table.string('rua').notNullable();
      table.string('numero').notNullable();
      table.string('bairro').notNullable();

      table.string('user_id').notNullable();

      table.foreign('user_id').references('id').inTable('users_quadra');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('quadras');
};
