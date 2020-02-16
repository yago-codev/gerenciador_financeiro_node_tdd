const request = require('supertest');

const app = require('../../src/app');

test('Deve listar todos os usuários', () => {
  return request(app).get('/users').then(res => {
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

// test.skip = vai ignorar o teste
// test.only = vai executar somente esse teste
test('Deve inserir usuário com sucesso', () => {
  // o Date.now() servirá pra pegar o tempo atual em milisegundos,
  // com isso iremos garantir que os emails nunca irão se repetir
  const email = `${Date.now()}@mail.com`;
  return request(app).post('/users')
    .send({ name: 'Walter Mitty', email, password: '123456' })
    .then(res => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Walter Mitty');
    });
});

test('Não deve inserir usuário sem nome', () => {
  return request(app).post('/users')
    .send({ email: 'email@email.com', password: '123456' })
    .then(res => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Nome é um atributo obrigatório');
    });
});
