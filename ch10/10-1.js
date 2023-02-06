


function isSummer(date, plan) {
  return date >= plan.summerStart && date <= plan.summerEnd;
}

function summerCharge(quantity, plan) {
  return quantity * plan.summerRate;
}

function regularCharge(quantity, plan) {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}

function calculateCharge(date, quantity, plan) {
  return isSummer(date, plan)
      ? summerCharge(quantity, plan)
      : regularCharge(quantity, plan);
}

// function calculateCharge(date, quantity, plan) {
//   const isSummer = date >= plan.summerStart && date <= plan.summerEnd;
//   return isSummer
//       ? quantity * plan.summerRate
//       : quantity * plan.regularRate + plan.regularServiceCharge;
// }

const date = new Date("2022-06-01");
const quantity = 1000;
const plan = {
  summerStart: new Date("2022-05-01"),
  summerEnd: new Date("2022-09-01"),
  summerRate: 10,
  regularRate: 20,
  regularServiceCharge: 15
};

console.log(calculateCharge(date, quantity, plan)); // Output: 10000