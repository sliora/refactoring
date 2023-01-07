export class Customer {
  #name;
  #setDiscountRate;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday());
    this.#setDiscountRate(discountRate);
  }

  get discountRate() {
    return this.#contract.discountRate;
  }

  setDiscountRate(number) {
    return this.#contract.discountRate = number;
  }

  becomePreferred() {
    this.#contract.discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#contract.discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  #discountRate;
  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }

  get discountRate() {
    return this.#discountRate;
  }

  set discountRate(arg) {
    this.#discountRate = arg;
  }
}
