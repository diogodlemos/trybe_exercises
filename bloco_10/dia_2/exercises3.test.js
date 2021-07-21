const { describe, expect } = require('@jest/globals');
const getUserName = require('./exercises3');

describe('Testa se o usuario existe', () => {
  it('Se id do usuario é 4 o usuario deve ser Mark', async () => {
    const user = await getUserName(4);
    expect(user).toBe('Mark');
  })
});

describe('Testa se o usuario é inexiste', () => {
    it('Se id do usuario é 2 espera-se um erro', async () => {
      try{
          await getUserName(2);
      } catch(err) {
        expect(err).toEqual({error: 'User with 2 not found.'});
      }
    })
  });