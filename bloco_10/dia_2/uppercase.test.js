const { expect } = require('@jest/globals');
const uppercase = require('./uppercase');

describe('Dada uma palavra verifique se a palavra está com letras maiusculas', () => {
  it('deveria ter a palavra GRANDE quando a palavra fornecida for grande', () => {
    const str = 'grande';
    function callback(stringUpperCase) {
      expect(stringUpperCase).toBe('GRANDE');
    }
    uppercase(str,callback);
  })
})