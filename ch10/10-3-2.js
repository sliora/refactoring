export function adjustedCapital(instrument) {
  let result = 0;
  if (instrument.capital <= 0|| instrument.interestRate <= 0 || instrument.duration < 0)  return result;

    result = (instrument.income / instrument.duration) * instrument.adjustmentFactor;

  return result;
}

const instrument = {
  capital: 1000,
  interestRate: 0.05,
  duration: 5,
  income: 50,
  adjustmentFactor: 1.5
};

console.log(adjustedCapital(instrument)); //Output: 15