export class ChargeCalculator {
  #customer;
  #usage
  #provider
  constructor(customer, usage, provider) {
    this.#customer = customer;
    this.#usage = usage;
    this.#provider = provider;
  }

  charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }
}
