// 예제 1
function totalOutstanding() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  return result;
}
function sendBill() {
  sendBill();
}



// 예제 2

function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      return "Don";
    }
    if (p === 'John') {
      return "John"
    }
  }
  return "";
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}

const found = findMiscreant(people);
setOffAlarms(alarm, found);
