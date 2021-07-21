const { generateRandomNumber } = require('./exercise1');
const func = require('./exercise1');
jest.mock('./exercise1');


describe('When generateRandomNumber is called', () => {
  it('The function was called', () => {
    func.generateRandomNumber = jest.fn().mockReturnValue(10);
    func.generateRandomNumber();
    expect(func.generateRandomNumber).toHaveBeenCalled();
    expect(func.generateRandomNumber()).toBe(10);
    expect(func.generateRandomNumber).toHaveBeenCalledTimes(2);
  })

  it('When create a new implemetation of operator division with parameters 6 e 2 return', () => {    
    func.generateRandomNumber.mockImplementation((first, second) => first/second);
    func.generateRandomNumber(6,2);

    expect(func.generateRandomNumber(6,2)).toBe(3);
    expect(func.generateRandomNumber).toHaveBeenCalled();
    expect(func.generateRandomNumber).toHaveBeenCalledTimes(4);
    expect(func.generateRandomNumber).toHaveBeenCalledWith(6,2);

  })

  it('When create a new implemetation of operator multiplication with parameters 4, 3 and 2 return, After reset and implement a new logic', () => {    
    func.generateRandomNumber.mockImplementation((first, second, third) => first* second* third);
    func.generateRandomNumber(4, 3, 2);

    expect(func.generateRandomNumber(4, 3, 2)).toBe(24);
    expect(func.generateRandomNumber).toHaveBeenCalled();
    expect(func.generateRandomNumber).toHaveBeenCalledTimes(6);
    expect(func.generateRandomNumber).toHaveBeenCalledWith(4, 3, 2);

    func.generateRandomNumber
      .mockReset()
      .mockImplementation((number) => number * 2);
    func.generateRandomNumber(3);

    expect(func.generateRandomNumber(3)).toBe(6);
    expect(func.generateRandomNumber).toHaveBeenCalled();
    expect(func.generateRandomNumber).toHaveBeenCalledTimes(2);
    expect(func.generateRandomNumber).toHaveBeenCalledWith(3);
  })
})
