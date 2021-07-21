const { expect } = require('@jest/globals');
const { assertions } = require('expect');
const { getUserName } = require('./exercise2');

describe('Teste da função getUserName',() => {

  it('Quando o id do usuario é existente',() => {
    expect.assertions(1);

    return getUserName(4).then((user) => {
      expect(user).toBe('Mark');
    })
  })

  it('Quando o id do usuario é inexistente',() => {
    expect.assertions(1);

    return getUserName(2).catch((err) => {
      expect(err).toEqual({ error: 'User with 2 not found.'});
    })
  })
})