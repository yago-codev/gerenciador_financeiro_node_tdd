const app = require('express')();
const consign = require('consign');
const knex = require('knex');
// const knexLogger = require('knex-logger'); // vai retornar os logs das queries
const knexfile = require('../knexfile');

app.db = knex(knexfile.test);

// app.use(knexLogger(app.db));

// por padrão o consign busca os arquivos a partir da raíz do projeto,
// portanto o cwd foi setado como sendo a pasta a partir de onde ele deverá buscar
consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

// retornando as querys no console.log:
// app.db.on('query', query => {
//   console.log({
//     sql: query.sql,
//     bindings: query.bindings ? query.bindings.join(',') : '',
//   });
// }).on('query-response', response => console.log(response))
//   .on('error', error => console.log(error));

module.exports = app;
