import * as assert from "assert";

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    if(!this.discountRate) return number;
    else {
      assert(this.discountRate >= 0);
      return number - (this.discountRate * number)
    }
  }

  set discountRate(number) {
    assert(null === number || number >= 0);
    this.discountRate = number;
  }
}