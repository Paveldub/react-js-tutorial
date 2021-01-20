import { mul, div, add, minus, pow } from "./mathOperators";

describe("mathOperators it cases", () => {
  const number = Math.floor(Math.random() * 20) + 1;
  const number1 = Math.floor(Math.random() * 6) + 1;
  const multiplyResult = number * number1;
  const divResult = number / number1;
  const addResult = number + number1;
  const minusResult = number - number1;
  const resultOfPow = Math.pow(number, number1);

  it(`mul ${number} * ${number1} to equal ${multiplyResult}`, () => {
    expect(mul(number, number1)).toBe(multiplyResult);
  });

  it(`div ${number} / ${number1} to equal ${divResult}`, () => {
    expect(div(number, number1)).toBe(divResult);
  });

  it(`add ${number} / ${number1} to equal ${addResult}`, () => {
    expect(add(number, number1)).toBe(addResult);
  });

  it(`min ${number} - ${number1} to equal ${minusResult}`, () => {
    expect(minus(number, number1)).toBe(minusResult);
  });

  it(`pow ${number} ** ${number1} to equal ${resultOfPow}`, () => {
    expect(pow(number, number1)).toBe(resultOfPow);
  });
});
it;
