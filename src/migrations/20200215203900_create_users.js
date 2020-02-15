// comando do knex para gerar migration:
// yarn knex migrate:make nome_da_migration --env test

// executando a migration:
// yarn knex migrate:latest --env test

// voltando a migration (rollback):
// yarn knex migrate:rollback --env test

exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary(); // a coluna id será auto incrementável e a chave primária
    table.string('name').notNull();
    table.string('email').notNull().unique();
    table.string('password').notNull();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
