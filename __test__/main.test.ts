
import { sumDigitsRecursivelyUntilSingleDigit } from '../src/sumDigitsRecursivelyUntilSingleDigit';

//16  -->  1 + 6 = 7
//19  -->  1 + 9 = 10 -->  1 + 0 = 1
//942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6


describe('sumDigits', () => {
  it('sums all digits in a number', () => {
    expect(sumDigitsRecursivelyUntilSingleDigit(1)).toEqual(1);
    expect(sumDigitsRecursivelyUntilSingleDigit(10)).toEqual(1);
  });
  it('recursively sums digits until single-digit number', () => {
    expect(sumDigitsRecursivelyUntilSingleDigit(19)).toEqual(1); //19  -->  1 + 9 = 10 -->  1 + 0 = 1
    expect(sumDigitsRecursivelyUntilSingleDigit(493193)).toEqual(2); //493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
  });
});
