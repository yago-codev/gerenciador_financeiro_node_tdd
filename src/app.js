const app = require('express')();
const consign = require('consign');

// por padrão o consign busca os arquivos a partir da raíz do projeto,
// portanto o cwd foi setado como sendo a pasta a partir de onde ele deverá buscar
consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'John Dow', email: 'john@mail.com' },
  ];

  res.status(200).json(users);
});

app.post('/users', (req, res) => {
  res.status(201).json(req.body);
});

module.exports = app;
