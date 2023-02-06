export function payAmount(employee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  }

  if (employee.isRetired) {
   return { amount: 0, reasonCode: 'RET' };
  }

  //급여 계산 로직
  // lorem.ipsum(dolor.sitAmet);
  // consectetur(adipiscing).elit();
  // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  // ut.enim.ad(minim.veniam);
  return someFinalComputation();
}

const employee1 = {
  isSeparated: false,
  isRetired: false,
};

const employee2 = {
  isSeparated: true,
  isRetired: false,
};

const employee3 = {
  isSeparated: false,
  isRetired: true,
};

function someFinalComputation() {

  return { amount: 999, reasonCode: 'UNICORN' };
}

console.log(payAmount(employee1)); // Output: someFinalComputation() 내용
console.log(payAmount(employee2)); // Output: { amount: 0, reasonCode: 'SEP' }
console.log(payAmount(employee3)); // Output: { amount: 0, reasonCode: 'RET' }
