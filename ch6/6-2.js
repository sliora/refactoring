// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const results = [];
  results.push(['name', customer.name]);
  results.push(['location', customer.location]);
  return results;
}

