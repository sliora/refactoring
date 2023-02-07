export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return (this._customer === "미확인 고객" ) ? new UnknownCustomer() : this._customer;
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

class UnknownCustomer {

  get name() {
    return "거주자";
  }

  get billingPlan() {
    return registry.billingPlan.basic;
  }
  set billingPlan(arg) {
    /* 무시 */
  }

  get paymentHistory() {
    return new NullPaymentHistory();
  }

  get weeksDelinquentInLastYear() {
    return 0;
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  console.log(`aCustomer: ${aCustomer}`);
  console.log(`aCustomer.name: ${aCustomer.name}`);

  let customerName = aCustomer.name;
  console.log(`customerName: ${customerName}`);

  const plan = aCustomer.billingPlan;
  console.log(`plan: ${plan}`);

  aCustomer.billingPlan = newPlan;
  console.log(`newPlan: ${newPlan}`);

  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
  console.log(`weeksDelinquent: ${weeksDelinquent}`);

  return customerName;
}