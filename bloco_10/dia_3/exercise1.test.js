const func = require('./exercise1');

describe('When generateRandomNumber is called', () => {
  it('The function was called', () => {
    func.generateRandomNumber = jest.fn().mockReturnValue(10);
    func.generateRandomNumber();
    expect(func.generateRandomNumber).toHaveBeenCalled();
    expect(func.generateRandomNumber()).toBe(10);
    expect(func.generateRandomNumber).toHaveBeenCalledTimes(2);
  })
})