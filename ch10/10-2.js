function isNotEligibleForDisability(employee) {
  return ((employee.seniority < 2) || (employee.monthsDisabled > 12) || (employee.isPartTime));
}

function disabilityAmount(employee) {
  return isNotEligibleForDisability(employee) ? 1 : 0;
}

const employee1 = {
  seniority: 3,
  monthsDisabled: 10,
  isPartTime: false
};

const employee2 = {
  seniority: 1,
  monthsDisabled: 20,
  isPartTime: true
};

console.log(disabilityAmount(employee1)); // Output: 0
console.log(disabilityAmount(employee2)); // Output: 1