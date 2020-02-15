// comando do knex para gerar migration:
// yarn knex migrate:make nome_da_migration --env test

module.exports = {
  test: {
    client: 'pg',
    version: '9.6',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'docker',
      database: 'gerenciador_financeiro',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
