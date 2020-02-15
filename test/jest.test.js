test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;

  expect(number).toBeNull();

  number = 10;

  expect(number).not.toBeNull();

  expect(number).toBe(10);

  expect(number).toEqual(10);

  expect(number).toBeGreaterThan(9); // toBeGreaterThan() = Se for maior que...

  expect(number).toBeLessThan(11); // toBeLessThan() = Se for menos que ...
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'John', email: 'john@teste.com' };

  expect(obj).toHaveProperty('name', 'John');

  expect(obj.name).toBe('John');

  const obj2 = { name: 'John', email: 'john@teste.com' };

  // expect(obj).toBe(obj2); // toBe() irá verificar o tipo e o conteúdo

  expect(obj).toEqual(obj2); // toEqual() irá verificar somente o valor
});
