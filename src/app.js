const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexfile');

app.db = knex(knexfile.test);

// por padrão o consign busca os arquivos a partir da raíz do projeto,
// portanto o cwd foi setado como sendo a pasta a partir de onde ele deverá buscar
consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;
