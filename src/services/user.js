module.exports = app => {
  const findAll = () => {
    return app.db('users').select();
  };

  const save = user => {
    // tratamento para poder enviar o campo nome com valor nulo dentro dos testes
    if (!user.name) return { error: 'Nome é um atributo obrigatório' };

    return app.db('users').insert(user, '*');
  };

  return { findAll, save };
};
